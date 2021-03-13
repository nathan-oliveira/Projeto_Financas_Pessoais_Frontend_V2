import React from 'react'
import styles from './modal.module.scss'

import { ReactComponent as Close } from 'Assets/svg/x.svg'

const Modal = (props) => {
  return (
    <div className={styles.details__modal}>
      <div className={styles.details__modal__close}>
        <Close />
      </div>
      <div className={styles.details__modal__title}>
        <h1>{props.title}</h1>
      </div>
      <div className={styles.details__modal__content}>
        {props.children}
      </div>
    </div>
  )
}

export default Modal
