import React from 'react'
import styles from './Form.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useForm from '../../../Hooks/useForm'
import { userPost, userLogin } from '../../../store/user/userPost'

import Input from '../../Template/Form/Input'
import Button from '../../Template/Form/Button'
import Grid from '../../Template/Form/Grid'
import Row from '../../Template/Form/Row'

const Form = ({ login, setLogin, setError }) => {
  const name = useForm()
  const email = useForm('email')
  const password = useForm()
  const password_confirmation = useForm()

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, data } = useSelector(state => state.userPost)
  const { data: dataToken, error: errorToken } = useSelector(state => state.token)

  React.useEffect(() => {
    setError(error);
  }, [error])

  React.useEffect(() => {
    setError(errorToken);
  }, [errorToken])

  async function handleSubmit(event) {
    event.preventDefault();

    if (login) {
      if (email.validate() && password.validate()) {
        await dispatch(userLogin({ email: email.value, password: password.value }))
        if (!errorToken) navigate('/')
      }
    } else {
      if (name.validate() && email.validate() && password.validate() && password_confirmation.validate()) {
        await dispatch(userPost({
          name: name.value,
          email: email.value,
          password: password.value,
          password_confirmation: password_confirmation.value
        }))

        if (data) setLogin(true);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      {!login && (
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
      )}
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
        <Grid cols="12">
          <Input
            label="Senha"
            type="password"
            name="password"
            max="255"
            {...password}
          />
        </Grid>
      </Row>
      {!login && (
        <Row>
          <Grid cols="12">
            <Input
              label="Confirmar Senha"
              type="password"
              name="password_confirmation"
              max="255"
              {...password_confirmation}
            />
          </Grid>
        </Row>
      )}

      <Row>
        <button
          type="button"
          className={styles.button__link}
          onClick={() => setLogin(!login)}
        >
          {login ? 'Não possui uma conta? Criar Agora.' : 'Já possui uma conta? Entrar Agora. '}
        </button>
        {loading ? (
          <Button disabled>{login ? 'Entrando...' : 'Cadastrando...'}</Button>
        ) : (
            <Button>{login ? 'Entrar' : 'Cadastrar'}</Button>
          )}
      </Row>
    </form>
  )
}

export default Form