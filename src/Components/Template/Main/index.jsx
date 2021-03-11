import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Main.module.scss'

const Main = ({ children }) => {
  const { data } = useSelector(state => state.user)
  
  return (
    <React.Fragment>
      <main className={`${styles.content} ${!data?.token ? styles.content__login__center : '' }`}>
        {children}
      </main>
    </React.Fragment>
  )
}

export default Main
