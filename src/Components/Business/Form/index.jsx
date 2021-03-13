import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import useForm from 'Hooks/useForm'
import useFetch from 'Hooks/useFetch'
import { formatMoney, revertMoney } from 'Helpers'
import { POST_BUSSINESS, PUT_BUSSINESS, GET_BUSINESS_ID, GET_CATEGORY } from 'Services/api'

import Grid from 'Components/Template/Form/Grid'
import Row from 'Components/Template/Form/Row'
import Input from 'Components/Template/Form/Input'
import Select from 'Components/Template/Form/Select'
import Button from 'Components/Template/Form/Button'
import RowButton from 'Components/Template/Form/RowButton'

import Error from 'Components/Helper/Error'
import Loading from 'Components/Helper/Loading'
import If from 'Components/Template/Operator/If'

const Form = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const types = useForm();
  const description = useForm();
  const money = useForm('money');
  const category = useForm();

  const { token } = useSelector(state => state.user.data)

  const { data, loading, error, request } = useFetch();
  const { request: requestPost } = useFetch();
  const { request: requestPut } = useFetch();
  const { data: dataCategory, request: requestCategory} = useFetch()

  React.useEffect(() => {
    const { url, options } = GET_CATEGORY(token)
    requestCategory(url, options)

    if (id) {
      const { url, options } = GET_BUSINESS_ID({ id, token })
      request(url, options)
    }
  }, [id])

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
        const { url, options } = PUT_BUSSINESS({ id, formData, token })
        const { response } = await requestPut(url, options)

        if (response.ok) navigate(`/${types.value}`)
      } else {
        const { url, options } = POST_BUSSINESS({ formData, token })
        const { response } = await requestPost(url, options)

        if (response.ok) navigate(`/${types.value}`)
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
            options={dataCategory ? dataCategory : []}
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