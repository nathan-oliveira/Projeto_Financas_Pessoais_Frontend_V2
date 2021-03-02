import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, useLocation } from 'react-router-dom'

import { businessPost } from '../../../store/business/businessPost'
import { businessGetId } from '../../../store/business/businessGetId'
import { businessPut } from '../../../store/business/businessPut'
import { fetchCategory } from '../../../store/category/categoryGet'
//fetchCategory

import useForm from '../../../Hooks/useForm'
import { formatMoney, revertMoney } from '../../../Helpers'

import Grid from '../../Template/Form/Grid'
import Row from '../../Template/Form/Row'
import Input from '../../Template/Form/Input'
import Select from '../../Template/Form/Select'
import Button from '../../Template/Form/Button'
import RowButton from '../../Template/Form/RowButton'

import Error from '../../Helper/Error'
import Loading from '../../Helper/Loading'

const Form = () => {
  const { id } = useParams();
  const location = useLocation();

  const types = useForm();
  const description = useForm();
  const money = useForm('money');
  const category = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector(state => state.token.data)
  const { error: errorPost, loading: loadingPost } = useSelector(state => state.businessPost)
  const { error: errorPut, loading: loadingPut } = useSelector(state => state.businessPut)
  const { error, loading, data } = useSelector(state => state.businessGetId)
  const { data: dataCategory } = useSelector(state => state.category)

  React.useEffect(() => {
    dispatch(fetchCategory(token))

    if (id) {
      dispatch(businessGetId({ id, token }))
    }
  }, [dispatch, id])

  React.useEffect(() => {
    if (data && id) {
      description.setValue(data[0].description)
      money.setValue(formatMoney(data[0].money))
      category.setValue(data[0].categoryId.id)
    }
  }, [data, id, location])

  React.useEffect(() => {
    switch (!!location.pathname) {
      case location.pathname.includes('receita'):
        types.setValue('receita')
        break;
      case location.pathname.includes('despesa'):
        types.setValue('despesa')
        break;
    }
  }, [location])

  async function handleSubmit(event) {
    event.preventDefault();

    if (description.validate() && money.validate() && category.validate()) {
      const formData = {
        types: types.value,
        description: description.value,
        money: revertMoney(money.value),
        categoryId: category.value
      }

      if (id) {
        await dispatch(businessPut({ id, formData, token }))
        if (!errorPut && !loadingPut) navigate(`/${types.value}`)
      } else {
        await dispatch(businessPost({ formData, token }))
        if (!errorPost && !loadingPost) navigate(`/${types.value}`)
      }
    }
  }

  if (loading) return <Loading />;
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
            label="Categoria"
            name="categoryId"
            {...category}
            options={dataCategory}
          />
        </Grid>
      </Row>
      <RowButton>
        {loading ? (
          <Button disabled>{id ? 'Atualizando...' : 'Cadastrando...'}</Button>
        ) : (
            <Button>{id ? 'Atualizar' : 'Cadastrar'}</Button>
          )}
      </RowButton>
    </form>
  )
}

export default Form