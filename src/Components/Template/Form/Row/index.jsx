import React from 'react'
import styles from './row.module.scss'

const RowButton = ({ children }) => {
  return (
    <div className={styles.row}>
      {children}
    </div>
  )
}

export default RowButton
