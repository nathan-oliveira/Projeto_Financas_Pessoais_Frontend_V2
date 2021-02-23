import React from 'react'
import styles from './pagination.module.scss'

const Pagination = ({ data, setPage, page, search, setDataTable }) => {
  const [pageDefault] = React.useState(9)
  const [qtdPage, setQtdPage] = React.useState(0);
  const [rowPages, setRowPages] = React.useState([]);

  React.useEffect(() => {
    function rowPages() {
      const arrayPages = [];
      const numberOfPages = Math.ceil(data.length / pageDefault);

      for (let index = 1; index <= numberOfPages; index++) {
        arrayPages.push(<li className={`${styles.page__link} ${page === index ? styles.page__link__active : ''}`} key={index} onClick={() => setPage(index)}>{index}</li>);
      }

      setQtdPage(numberOfPages)
      setRowPages(arrayPages)
    }

    rowPages()
  }, [data, page, pageDefault, setPage])

  React.useEffect(() => {
    const currentPosts = data.slice(page * pageDefault - pageDefault, page * pageDefault);
    const filtered = data.filter(user => user.description.toLowerCase().includes(search.toLowerCase()))
    setDataTable(search.length > 0 ? filtered : currentPosts)
  }, [data, page, search, pageDefault, setDataTable])

  const incPage = React.useCallback(() => page < qtdPage && setPage(page + 1), [page, qtdPage, setPage]);
  const descPage = React.useCallback(() => page > 1 && setPage(page - 1), [page, setPage])

  return (
    <div className={styles.table__pagination}>
      <ul className="total"> Mostrando {page} de {qtdPage} páginas </ul>
      <ul className={styles.pagination}>
        <li onClick={() => descPage(page)} className={styles.page__button}>&#8678;</li>
        {search === '' ? (
          rowPages
        ) : (
            <li className={`${styles.page__link} ${styles.page__link__active}`}>1</li>
          )}
        <li onClick={() => incPage(page)} className={styles.page__button}>&#8680;</li>
      </ul>
    </div>
  )
}

export default Pagination
