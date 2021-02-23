import React from 'react'
import styles from './search.module.scss'

import { ReactComponent as SearchIcon } from '../../../../Assets/svg/search.svg'

const Search = ({ setQuery }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.search__input}
        onChange={ev => setQuery(ev.target.value)}
        placeholder="Pesquisar"
        maxLength="50"
      />
      <SearchIcon />
    </div>
  )
}

export default Search
