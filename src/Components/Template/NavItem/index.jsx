import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './NavItem.module.scss'

import { ReactComponent as Home } from '../../../Assets/svg/home.svg'
import { ReactComponent as FilePlus } from '../../../Assets/svg/file-plus.svg'
import { ReactComponent as FileMinus } from '../../../Assets/svg/file-minus.svg'
import { ReactComponent as TrendingUp } from '../../../Assets/svg/trending-up.svg'
import { ReactComponent as PlusCircle } from '../../../Assets/svg/plus-circle.svg'

const NavItem = ({ mobile, changeMenuMobile }) => {
  const { menu } = useSelector(state => state.menu)

  function setMobile() {
    if (mobile) {
      changeMenuMobile()
    }
  }

  return (
    <ul className={!mobile ? styles.navbar__item : styles.navbar__item__mobile}>
      <Link to="/" onClick={setMobile}>
        <Home />
        <span className={(!menu && !mobile) ? 'offscreen' : 'onscreen'}>Início</span>
      </Link>
      <Link to="/receita" onClick={setMobile}>
        <FilePlus />
        <span className={(!menu && !mobile) ? 'offscreen' : 'onscreen'}>Receitas</span>
      </Link>
      <Link to="/despesa" onClick={setMobile}>
        <FileMinus />
        <span className={(!menu && !mobile) ? 'offscreen' : 'onscreen'}>Despesas</span>
      </Link>
      <Link to="/metas" onClick={setMobile}>
        <TrendingUp />
        <span className={(!menu && !mobile) ? 'offscreen' : 'onscreen'}>Metas</span>
      </Link>
      <Link to="/categoria" onClick={setMobile}>
        <PlusCircle />
        <span className={(!menu && !mobile) ? 'offscreen' : 'onscreen'}>Categorias</span>
      </Link>
    </ul>
  )
}

export default NavItem