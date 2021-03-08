import React from 'react'
import styles from './Header.module.scss'

import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../../store/user/userPost'
import { toggleMenu } from '../../../store/menu/menuToggle'

import useMedia from '../../../Hooks/useMedia'
import NavItem from '../NavItem'
import Dropdown from '../../Template/DropdownItem'

const Header = () => {
  const mobile = useMedia('(max-width: 800px)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { menu } = useSelector(state => state.menu)
  const { data } = useSelector(state => state.token)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeMenuMobile = () => setMobileMenu(!mobileMenu);
  const changeMenuSide = () => dispatch(toggleMenu(!menu))

  function logout() {
    navigate('/login')
    dispatch(userLogout())
  }

  return (
    <>
      <header className={`${styles.nav} ${styles.navbar}`}>
        {mobile ? (
          <button
            className={`${styles.navbar__icon} ${mobileMenu ? styles.navbar__icon___active : ''}`}
            onClick={changeMenuMobile}></button>
        ) : (
            <button onClick={changeMenuSide} className={styles.navbar__icon}></button>
          )}

        <ul className={styles.navbar__items}>
          <li>
            <Dropdown title={`${data.name.split(' ')[0]} ${data.name.split(' ')[1]}`}>
              <ul>
                <li onClick={() => navigate("/minha-conta")}>Minha Conta</li>
                <li onClick={logout}>Sair</li>
              </ul>
            </Dropdown>
          </li>
        </ul>
      </header>

      {mobile && (
        <nav className={`${styles.navbar__mobile} ${mobileMenu ? styles.navbar__mobile__active : styles.navbar__mobile__disabled}`}>
          <NavItem mobile={true} />
        </nav>
      )}
    </>
  )
}

export default Header
