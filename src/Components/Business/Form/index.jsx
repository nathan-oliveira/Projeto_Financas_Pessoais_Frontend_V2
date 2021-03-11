import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import useForm from '../../../Hooks/useForm'
import useFetch from '../../../Hooks/useFetch'

import { POST_BUSSINESS, PUT_BUSSINESS, GET_BUSINESS_ID, GET_CATEGORY } from '../../../Services/api'
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
  const navigate = useNavigate();

  const types = useForm();
  const description = useForm();
  const money = useForm('money');
  const category = useForm();

  const { token } = useSelector(state => state.token.data)

  const { data, loading, error, request } = useFetch();
  const { loading: loadingPost, error: errorPost, request: requestPost } = useFetch();
  const { loading: errorPut, error: loadingPut, request: requestPut } = useFetch();
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