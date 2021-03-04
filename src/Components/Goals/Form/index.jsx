import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import useForm from '../../../Hooks/useForm'
import { goalPost } from '../../../store/goals/goalPost'
import { goalGetId } from '../../../store/goals/goalGetId'
import { goalPut } from '../../../store/goals/goalPut'
import { revertMoney, formatMoney } from '../../../Helpers'

import Input from '../../Template/Form/Input'
import Select from '../../Template/Form/Select'
import Button from '../../Template/Form/Button'
import Grid from '../../Template/Form/Grid'
import Row from '../../Template/Form/Row'
import RowButton from '../../Template/Form/RowButton'
import Loading from '../../Helper/Loading'
import Error from '../../Helper/Error'

const Form = () => {
  const { id } = useParams();

  const description = useForm();
  const types = useForm();
  const money = useForm('money');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector(state => state.token.data)
  const { error: errorPost, loading: loadingPost } = useSelector(state => state.goalPost)
  const { error, loading, data } = useSelector(state => state.goalGetId)
  const { error: errorPut, loading: loadingPut } = useSelector(state => state.goalPut)

  React.useEffect(() => {
    if (id) {
      dispatch(goalGetId({ id, token }))
    }
  }, [dispatch, id])

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
        await dispatch(goalPut({ id, formData, token }))
        if (!errorPut && !loadingPut) navigate('/metas')
      } else {
        await dispatch(goalPost({ formData, token }))
        if (!errorPost && !loadingPost) navigate('/metas');
      }
    }
  }

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data || !loading) return (
    <form onSubmit={handleSubmit} className="from animeLeft" autoComplete="off">
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
        <Button>{id ? 'Atualizar' : 'Cadastrar'}</Button>
      </RowButton>
    </form>
  )
}

export default Form
