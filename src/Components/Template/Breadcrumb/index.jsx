import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './breadcrumb.module.scss'

const Breadcrumb = ({ title, path }) => {
  const [breadcrumb, setBreadcrumb] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;

    switch (!!pathname) {
      case pathname.includes('cadastrar'):
        setBreadcrumb('Cadastrar');
        break;
      case pathname.includes('editar'):
        setBreadcrumb('Editar');
        break;
      case pathname.includes(path):
        setBreadcrumb('Listagem');
        break;
      default:
        setBreadcrumb(path);
    }
  }, [location, path])

  return (
    <div className={`animeLeft ${styles.breadcrumb}`}>
      <ol className={styles.breadcrumb__nav}>
        <li>
          <ul className={styles.breadcrumb__item}>
            {title} <small className={styles.breadcrumb__small}>{breadcrumb}</small>
          </ul>
        </li>
      </ol>
    </div>
  )
}

export default Breadcrumb;
