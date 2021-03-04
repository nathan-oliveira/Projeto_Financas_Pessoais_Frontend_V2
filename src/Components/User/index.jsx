import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import styles from './User.module.scss'
import Form from './Form'
import Head from '../Helper/Head'

const User = () => {
  const [error, setError] = React.useState(null);
  const [login, setLogin] = React.useState(true);
  const { data } = useSelector(state => state.token)

  if ((data === null || data?.token === null)) return (
    <section className={`${styles.content} animeTop`}>
      <Head title="Autenticação" />
      <div className={styles.card}>
        <div className={styles.card__header}>
          <h1 className={login ? styles.card__header__title : styles.card__header__title2}>
            {login ? 'Entrar' : 'Cadastrar'}
          </h1>
        </div>
        <div className={styles.card__main}>
          {error && <p className={styles._card__main__error}>{error}</p>}
          <Form login={login} setLogin={setLogin} setError={setError} />
        </div>
      </div>
    </section>
  )
  else
    return <Navigate to="/" />;
}

export default User
