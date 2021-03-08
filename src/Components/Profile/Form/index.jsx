import React from 'react'

import useForm from '../../../Hooks/useForm'

import Input from '../../Template/Form/Input'
import Row from '../../Template/Form/Row'
import Grid from '../../Template/Form/Grid'

const Form = () => {
  const name = useForm()
  const email = useForm('email')
  const password = useForm()
  const password_confirmation = useForm()

  return (
    <form className="form" autoComplete="off">
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
    </form>
  )
}

export default Form
