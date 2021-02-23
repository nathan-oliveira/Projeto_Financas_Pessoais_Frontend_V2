import React from 'react'
import styles from './Main.module.scss'

const Main = ({ children }) => {
  return (
    <React.Fragment>
      <main className={styles.content}>
        {children}
      </main>
    </React.Fragment>
  )
}

export default Main
