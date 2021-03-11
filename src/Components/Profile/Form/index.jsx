import React from 'react'
import { useSelector } from 'react-redux'
import useForm from '../../../Hooks/useForm'
import useFetch from '../../../Hooks/useFetch'
import { PUT_PROFILE } from '../../../Services/api'

import Input from '../../Template/Form/Input'
import Row from '../../Template/Form/Row'
import Grid from '../../Template/Form/Grid'
import RowButton from '../../Template/Form/RowButton'
import Button from '../../Template/Form/Button'
import If from '../../Template/Operator/If'

const Form = () => {
  const name = useForm()
  const email = useForm('email')
  const password = useForm()
  const password_confirmation = useForm()

  const { loading, error, request } = useFetch();
  const { data: dataToken } = useSelector(state => state.user)

  React.useEffect(() => {
    if (dataToken) {
      name.setValue(dataToken.name)
      email.setValue(dataToken.email)
    }
  }, [dataToken])

  async function handleSubmit(event) {
    event.preventDefault();

    if (name.validate() && email.validate()) {
      const dataForm = {
        name: name.value,
        email: email.value,
        password: password.value ? password.value : undefined,
        password_confirmation: password_confirmation.value ? password_confirmation.value : undefined
      }

      if (password.value || password_confirmation.value) {

        if (password.value != password_confirmation.value) {
          password.setError(true)
          password_confirmation.setError(true)

          return alert("O campo 'Nova Senha' e 'Confirmar (Nova Senha)' não são iguais!")
        }
  
        if (password.value.length < 5 || password_confirmation.value.length < 6) {
          password.setError(true)
          password_confirmation.setError(true)

          return alert("O campo 'Nova Senha' e 'Confirmar (Nova Senha)' deve conter no mínimo 6 caracteres!")
        }

      }

      const { url, options } = PUT_PROFILE(dataForm, dataToken.token)
      const { response } = await request(url, options)

      if (response.ok) alert('Perfil atualizado!')
      if (error) alert(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form" autoComplete="off">
      <Row>
        <Grid cols="12">
          <Input
            label="Nome"
            type="text"
            name="name"
            max="255"
            {...name}
          />
        </Grid>
      </Row>
      <Row>
        <Grid cols="12">
          <Input
            label="Email"
            type="email"
            name="email"
            max="255"
            {...email}
          />
        </Grid>
      </Row>
      <Row>
        <Grid cols="6">
          <Input
            label="Nova Senha"
            type="password"
            name="password"
            max="255"
            {...password}
          />
        </Grid>
        <Grid cols="6">
          <Input
            label="Confirmar (Nova Senha)"
            type="password"
            name="password_confirmation"
            max="255"
            {...password_confirmation}
          />
        </Grid>
      </Row>
      <RowButton>
        <If test={loading}>
          <Button disabled>Atualizando...</Button>
        </If>

        <If test={!loading}>
          <Button>Atualizar</Button>
        </If>
      </RowButton>
    </form>
  )
}

export default Form
