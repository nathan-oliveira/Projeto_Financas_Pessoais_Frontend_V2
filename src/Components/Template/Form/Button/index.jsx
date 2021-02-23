import React from 'react'
import styles from './button.module.scss'

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
