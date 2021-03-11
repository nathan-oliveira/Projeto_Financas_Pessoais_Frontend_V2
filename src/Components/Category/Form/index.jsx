import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import useForm from '../../../Hooks/useForm'
import useFetch from '../../../Hooks/useFetch'
import { POST_CATEGORY, GET_CATEGORY_ID, PUT_CATEGORY } from '../../../Services/api'

import Input from '../../Template/Form/Input'
import Button from '../../Template/Form/Button'
import Grid from '../../Template/Form/Grid'
import Row from '../../Template/Form/Row'
import RowButton from '../../Template/Form/RowButton'

import Loading from '../../Helper/Loading'
import Error from '../../Helper/Error'
import If from '../../Template/Operator/If'

const Form = () => {
  const { id } = useParams();
  const name = useForm();
  const icon = useForm();

  const navigate = useNavigate()

  const { token } = useSelector(state => state.token.data)
  const { data, loading, error, request } = useFetch();
  const { request: requestPost } = useFetch()
  const { request: requestPut } = useFetch();

  React.useEffect(() => {
    if (id) {
      const { url, options } = GET_CATEGORY_ID({ id, token })
      request(url, options)
    }
  }, [id])

  React.useEffect(() => {
    if (data && id) {
      name.setValue(data[0].name)
      icon.setValue(data[0].icon)
    }
  }, [data, id])

  async function handleSubmit(event) {
    event.preventDefault();

    if (name.validate() && icon.validate()) {
      const formData = {
        name: name.value,
        icon: icon.value
      }

      if (id) {
        const { url, options } = PUT_CATEGORY({ id, formData, token })
        const { response } = await requestPut(url, options)

        if (response.ok) navigate('/categoria')
      } else {
        const { url, options } = POST_CATEGORY({ formData, token })
        const { response } = await requestPost(url, options)

        if (response.ok) navigate('/categoria')
      }
    }
  }

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data || !loading) return (
    <form onSubmit={handleSubmit} className="form animeLeft" autoComplete="off">
      <Row>
        <Grid cols="4">
          <Input
            label="Descrição"
            type="text"
            name="name"
            max="255"
            {...name}
          />
        </Grid>
        <Grid cols="8">
          <Input
            label="Icone"
            type="text"
            name="icon"
            max="1000"
            {...icon}
          />
        </Grid>
      </Row>
      <RowButton>
        <If test={loading}>
          <Button disabled>{id ? 'Atualizando...' : 'Cadastrando...'}</Button>
        </If>
        <If test={!loading}>
          <Button>{id ? 'Atualizar' : 'Cadastrar'}</Button>
        </If>
      </RowButton>
    </form>
  )
}

export default Form