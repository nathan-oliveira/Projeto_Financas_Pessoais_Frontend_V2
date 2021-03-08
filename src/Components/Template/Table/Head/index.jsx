import React from 'react'
import styles from '../table.module.scss'

const Head = ({ keys, head }) => {
  const tableHead = head || {}

  return (
    <thead className={styles.table__thead}>
      <tr>
        {keys.map((key, index) => (
          tableHead[key] && <th key={key} className={`table__col${index + 1}`}>{tableHead[key]}</th>
        ))}

        {(keys.length > 0) ? (
          <th className="table__action">Ações</th>
        ) : (
            <th className={styles.table__notItem}>&nbsp;</th>
          )}

      </tr>
    </thead >
  )
}

export default Head