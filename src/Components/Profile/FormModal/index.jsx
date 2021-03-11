import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useForm from '../../../Hooks/useForm'
import useFetch from '../../../Hooks/useFetch'

import { PATCH_PROFILE_FOTO } from '../../../Services/api'
import { updateFoto } from '../../../store/user/user'

import Input from '../../Template/Form/Input'
import RowButton from '../../Template/Form/RowButton'
import Button from '../../Template/Form/Button'
import If from '../../Template/Operator/If'

const FormModal = () => {
  const foto = useForm()
  const dispatch = useDispatch()
  const { loading, error, request } = useFetch();
  const { data: dataToken } = useSelector(state => state.user)

  React.useEffect(() => {
    if (dataToken) {
      foto.setValue(dataToken.foto)
    }
  }, [dataToken])

  async function handleSubmit(event) {
    event.preventDefault()

    if (foto.validate()) {
      const dataForm = { foto: foto.value }
      const { url, options } = PATCH_PROFILE_FOTO(dataForm, dataToken.token)
      const { response } = await request(url, options)
  
      if (response.ok) dispatch(updateFoto(dataForm))
      if (error) alert(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form" autoComplete="off">
      <Input
        label="URL da Imagem"
        type="text"
        name="foto"
        max="1000"
        {...foto}
      />
      <RowButton>
        <If test={loading}>
          <Button disabled>Alterando...</Button>
        </If>

        <If test={!loading}>
          <Button>Alterar</Button>
        </If>
      </RowButton>
    </form>
  )
}

export default FormModal
