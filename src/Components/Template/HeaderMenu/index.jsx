import React from 'react'
import styles from './header.module.scss'
import { NavLink, useLocation } from 'react-router-dom'

const HeaderMenu = ({ path }) => {
  const { pathname } = useLocation();

  return (
    <nav className={`animeLeft ${styles.menu__pages}`}>
      <ul>
        <li>
          <NavLink to={path} end activeClassName={styles.menu__item__active}>Listagem</NavLink>
        </li>

        {pathname.includes('editar') ? (
          <li>
            <NavLink to={`${path}/editar`} activeClassName={styles.menu__item__active}>Editar</NavLink>
          </li>
        ) : (
            <li>
              <NavLink to={`${path}/cadastrar`} activeClassName={styles.menu__item__active}>Cadastrar</NavLink>
            </li>
          )}
      </ul>
    </nav>
  )
}

export default HeaderMenu
