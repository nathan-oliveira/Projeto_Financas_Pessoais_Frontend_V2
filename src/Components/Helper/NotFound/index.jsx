import React from 'react'
import styles from './notfound.module.scss'

const NotFound = () => {
  return (
    <section className={`animeTop ${styles.not__found}`}>
      <h1 className={styles.not__found___title}>Erro: 404</h1>
      <p>Página não encontrada.</p>
    </section>
  )
}

export default NotFound
