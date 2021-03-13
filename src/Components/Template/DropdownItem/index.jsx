import React from 'react'
import styles from './dropdownitem.module.scss'

import { ReactComponent as ChevronDown } from 'Assets/svg/chevron-down.svg'

const DropdownItem = (props) => {
  return (
    <div className={styles.dropdown}>
    <div className={styles.dropdown__center}>
      <button className={styles.dropdown__button}>{props.title}</button>
      <ChevronDown />
    </div>
    <div className={styles.dropdown__content}>
      {props.children}
    </div>
  </div>
  )
}

export default DropdownItem
