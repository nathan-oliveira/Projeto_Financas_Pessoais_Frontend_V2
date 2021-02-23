import React from 'react'
import styles from './rowButton.module.scss'

const RowButton = ({ children }) => {
  return (
    <div className={styles.row__button}>
      {children}
    </div>
  )
}

export default RowButton
