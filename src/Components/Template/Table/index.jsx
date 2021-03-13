import React from 'react'
import styles from './table.module.scss'

import Head from './Head'
import Row from './Row'

const Table = ({ dataTable, loading, deletePost, getPost, head }) => {
  const keys = Object.keys(dataTable[0] || [])

  return (
    <React.Fragment>
      <table className={`${styles.table} ${!loading && styles.listing}`}>
        <Head keys={keys} head={head} />
        <tbody className={styles.table__tbody}>
          {(keys.length > 0) ? (
            dataTable.map(record => <Row key={record.id} record={record} deletePost={deletePost} getPost={getPost} head={head} />)
          ) : (
              <tr>
                <td className={styles.table__notItem}>Nenhum registro encontrado.</td>
              </tr>
            )}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default Table
