import React from 'react'
import styles from './Header.module.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../../store/user/userPost'
import { toggleMenu } from '../../../store/menu/menuToggle'

import useMedia from '../../../Hooks/useMedia'
import NavItem from '../NavItem'

const Header = () => {
  const mobile = useMedia('(max-width: 800px)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { menu } = useSelector(state => state.menu)

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

        <div className={styles.navbar__title}>
          <p onClick={logout}>Sair</p>
        </div>
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
