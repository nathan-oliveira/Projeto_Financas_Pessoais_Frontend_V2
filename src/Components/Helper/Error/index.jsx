import React from 'react'
import styles from './error.module.scss'

const Error = ({ error }) => {
  return (
    <div className={`animeTop ${styles.error}`}>
      <h1 className={styles.error__title}>Erro: 404</h1>
      <p>{error}</p>
    </div >
  )
}

export default Error
