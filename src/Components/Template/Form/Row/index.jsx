import React from 'react'
import styles from './row.module.scss'

const RowButton = ({ children, classRow }) => {
  return (
    <div className={`${styles.row} ${classRow ? classRow : ''}`}>
      {children}
    </div>
  )
}

export default RowButton
