import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import useForm from '../../../Hooks/useForm'
import useFetch from '../../../Hooks/useFetch'
import { POST_GOAL, PUT_GOAL, GET_GOAL_ID } from '../../../Services/api'

import { revertMoney, formatMoney } from '../../../Helpers'

import Input from '../../Template/Form/Input'
import Select from '../../Template/Form/Select'
import Button from '../../Template/Form/Button'
import Grid from '../../Template/Form/Grid'
import Row from '../../Template/Form/Row'
import RowButton from '../../Template/Form/RowButton'

import Loading from '../../Helper/Loading'
import Error from '../../Helper/Error'
import If from '../../Template/Operator/If'

const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const description = useForm();
  const types = useForm();
  const money = useForm('money');

  const { token } = useSelector(state => state.token.data)
  const { data, loading, error, request } = useFetch();
  const { error: errorPost, loading: loadingPost, request: requestPost } = useFetch()
  const { loading: errorPut, error: loadingPut, request: requestPut } = useFetch();

  React.useEffect(() => {
    if (id) {
      const { url, options } = GET_GOAL_ID({ id, token })
      request(url, options)
    }
  }, [id])

  React.useEffect(() => {
    if (data && id) {
      description.setValue(data[0].description)
      types.setValue(data[0].types)
      money.setValue(formatMoney(data[0].money))
    }
  }, [data, id])

  async function handleSubmit(event) {
    event.preventDefault();

    if (description.validate() && types.validate() && money.validate()) {
      const formData = {
        description: description.value,
        types: types.value,
        money: revertMoney(money.value)
      }

      if (id) {
        const { url, options } = PUT_GOAL({ id, formData, token })
        const { response } = await requestPut(url, options)

        if (response.ok) navigate('/metas')
      } else {
        const { url, options } = POST_GOAL({ formData, token })
        const { response } = await requestPost(url, options)

        if (response.ok) navigate('/metas')
      }
    }
  }

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data || !loading) return (
    <form onSubmit={handleSubmit} className="form animeLeft" autoComplete="off">
      <Row>
        <Grid cols="12">
          <Input
            label="Descrição"
            type="text"
            name="description"
            max="255"
            {...description}
          />
        </Grid>
      </Row>
      <Row>
        <Grid cols="6">
          <Input
            label="Valor (R$)"
            type="text"
            name="money"
            max="8"
            {...money}
          />
        </Grid>
        <Grid cols="6">
          <Select
            label="Tipo"
            name="types"
            {...types}
            options={[{ id: 'receita', name: 'Receita' }, { id: 'despesa', name: 'Despesa' }]}
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
