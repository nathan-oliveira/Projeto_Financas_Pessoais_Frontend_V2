import React from 'react'
import styles from './Card.module.scss'
import { dataAtualFormatada } from '../../../Helpers'

import { ReactComponent as Donate } from '../../../Assets/svg/donate-solid.svg'
import { ReactComponent as ArrowAlt } from '../../../Assets/svg/arrow-alt-circle-right-solid.svg'

const Card = ({ color, valor }) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.card__body} ${(color === 'total') ? styles.card__total : (color === 'receita' ? styles.card__receita : styles.card__despesa)}`}>
        <div className={styles.card__info}>
          <h1 className={styles.card__title}>{valor}</h1>
          <p className={styles.card__subtitle}>{dataAtualFormatada()}</p>
        </div>
        <div className={styles.card__logo}>
          <Donate />
        </div>
      </div>
      <div className={`${styles.card__footer} ${(color === 'total') ? styles.card__total__footer : (color === 'receita' ? styles.card__receita__footer : styles.card__despesa__footer)}`}>
        <ArrowAlt />
        <p className={styles.card__footer__title}>
          {color === 'total' ? 'Saldo Atual' : color[0].toUpperCase() + color.slice(1).toLowerCase()}
        </p>
      </div>
    </div>
  )
}

export default Card;
