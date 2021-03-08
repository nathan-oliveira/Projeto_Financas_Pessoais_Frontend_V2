import React from 'react'
import styles from './dropdownitem.module.scss'

const DropdownItem = (props) => {
  return (
    <div className={styles.dropdown}>
    <div className={styles.dropdown__center}>
      <button className={styles.dropdown__button}>{props.title}</button>
      {/* <i class="fas fa-angle-down"></i> */}
    </div>
    <div className={styles.dropdown__content}>
      {props.children}
    </div>
  </div>
  )
}

export default DropdownItem
