import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './NavItem.module.scss'

import If from '../Operator/If'

import { ReactComponent as Home } from '../../../Assets/svg/home.svg'
import { ReactComponent as FilePlus } from '../../../Assets/svg/file-plus.svg'
import { ReactComponent as FileMinus } from '../../../Assets/svg/file-minus.svg'
import { ReactComponent as TrendingUp } from '../../../Assets/svg/trending-up.svg'
import { ReactComponent as PlusCircle } from '../../../Assets/svg/plus-circle.svg'

const NavItem = ({ mobile, changeMenuMobile }) => {
  const { menu } = useSelector(state => state.menu)
  const { data } = useSelector(state => state.user)

  function setMobile() {
    if (mobile) {
      changeMenuMobile()
    }
  }

  return (
    <ul className={!mobile ? styles.navbar__item : styles.navbar__item__mobile}>
      <If test={data.nivel}>
        <Link to="/" onClick={setMobile} className="animeTop">
          <Home />
          <span className={(!menu && !mobile) ? 'offscreen' : 'onscreen'}>Início</span>
        </Link>
        <Link to="/receita" onClick={setMobile} className="animeTop">
          <FilePlus />
          <span className={(!menu && !mobile) ? 'offscreen' : 'onscreen'}>Receitas</span>
        </Link>
        <Link to="/despesa" onClick={setMobile} className="animeTop">
          <FileMinus />
          <span className={(!menu && !mobile) ? 'offscreen' : 'onscreen'}>Despesas</span>
        </Link>
        <Link to="/metas" onClick={setMobile} className="animeTop">
          <TrendingUp />
          <span className={(!menu && !mobile) ? 'offscreen' : 'onscreen'}>Metas</span>
        </Link>
        <If test={data.nivel === 1}>
          <Link to="/categoria" onClick={setMobile} className="animeTop">
            <PlusCircle />
            <span className={(!menu && !mobile) ? 'offscreen' : 'onscreen'}>Categorias</span>
          </Link>
        </If>
      </If>
    </ul>
  )
}

export default NavItem