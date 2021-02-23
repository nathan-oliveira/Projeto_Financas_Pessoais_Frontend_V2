import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

const Logo = () => {
  const { menu } = useSelector(state => state.menu)

  return (
    <ul className={styles.logo}>
      <li>
        <Link to="/" className={!menu ? styles.logo__link : ''}>
          F<span className={!menu ? 'offscreen' : 'onscreen'}>inanceiro</span>
        </Link>
      </li>
    </ul>
  )
}

export default Logo;