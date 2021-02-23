import React from 'react'
import styles from './Sidenav.module.scss'
import { useSelector } from 'react-redux'

import NavItem from '../NavItem'
import Logo from '../Logo'

const Sidenav = () => {
  const { menu } = useSelector(state => state.menu)

  return (
    <aside className={!menu ? styles.sidenav__close : styles.sidenav}>
      <nav className={styles.sidenav__content}>
        <Logo />
        <NavItem />
      </nav>
    </aside>
  )
}

export default Sidenav