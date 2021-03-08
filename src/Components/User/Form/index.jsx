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
import If from '../../Template/Operator/If'

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
    setError(errorToken);
  }, [errorToken])

  async function handleSubmit(event) {
    event.preventDefault();

    if (login) {
      if (email.validate() && password.validate()) {
        await dispatch(userLogin({ email: email.value, password: password.value }))
        if (!errorToken) navigate('/')
        if (error) setError(error)
      }
    } else {
      if (name.validate() && email.validate() && password.validate() && password_confirmation.validate()) {
        await dispatch(userPost({
          name: name.value,
          email: email.value,
          password: password.value,
          password_confirmation: password_confirmation.value
        }))

        if (error) setError(error)
        if (!error) setLogin(true);
      }
    }

  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="form">
      <If test={!login}>
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
      </If>
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
      <If test={!login}>
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
      </If>

      <Row classRow="row__reverse">
        <If test={loading}>
          <Button disabled>{login ? 'Entrando...' : 'Cadastrando...'}</Button>
        </If>

        <If test={!loading}>
          <Button>{login ? 'Entrar' : 'Cadastrar'}</Button>
        </If>
        
        <button
          type="button"
          className={styles.button__link}
          onClick={() => setLogin(!login)}
        >
          {login ? 'Não possui uma conta? Criar Agora.' : 'Já possui uma conta? Entrar Agora. '}
        </button>
      </Row>
    </form>
  )
}

export default Form