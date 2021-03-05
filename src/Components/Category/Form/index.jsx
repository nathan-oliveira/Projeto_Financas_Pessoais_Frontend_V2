import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import useForm from '../../../Hooks/useForm'
import { categoryPost } from '../../../store/category/categoryPost'
import { categoryGetId } from '../../../store/category/categoryGetId'

import Input from '../../Template/Form/Input'
import Button from '../../Template/Form/Button'
import Grid from '../../Template/Form/Grid'
import Row from '../../Template/Form/Row'
import RowButton from '../../Template/Form/RowButton'
import Loading from '../../Helper/Loading'
import Error from '../../Helper/Error'

const Form = () => {
  const { id } = useParams();

  const name = useForm();
  const icon = useForm();

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { token } = useSelector(state => state.token.data)
  const { error, loading, data } = useSelector(state => state.categoryGetId)
  const { error: errorPost, loading: loadingPost } = useSelector(state => state.categoryPost)

  React.useEffect(() => {
    if (id) {
      dispatch(categoryGetId({ id, token }))
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
        console.log('PUT => ', id)
      } else {
        await dispatch(categoryPost({ formData, token }))
        if (!errorPost && !loadingPost) navigate('/categoria')
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
        <Button>{id ? 'Atualizar' : 'Cadastrar'}</Button>
      </RowButton>
    </form>
  )
}

export default Form