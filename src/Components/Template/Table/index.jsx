import React from 'react'
import styles from './table.module.scss'

import { ReactComponent as Trash } from '../../../Assets/svg/trash.svg'
import { ReactComponent as Edit } from '../../../Assets/svg/edit.svg'

const Head = ({ keys, head }) => {
  const tableHead = head || {}
  return (
    <thead className={styles.table__thead}>
      <tr>
        {keys.map((key, index) => <th key={key} className={`table__col${index + 1}`}>{tableHead[key] || key}</th>)}
        <th className="table__action">Ações</th>
      </tr>
    </thead>
  )
}

const Row = ({ record, getPost, deletePost }) => {
  const keys = Object.keys(record)

  return (
    <tr key={record.id}>
      {keys.map((key, index) => <td key={key} className={`table__col${index + 1}`}>{record[key]}</td>)}
      <td className="table__action">
        <div className={styles.table__action___button}>
          <button title="Editar" onClick={() => getPost(record.id)} className={styles.table__action__edit}>
            <Edit />
          </button>
          <button title="Excluir" onClick={() => deletePost(record.id)} className={styles.table__action__trash}>
            <Trash />
          </button>
        </div>
      </td>
    </tr>
  )
}

const Table = ({ dataTable, loading, deletePost, getPost, head }) => {
  const keys = Object.keys(dataTable[0] || [])

  return (
    <>
      <table className={`${styles.table} ${!loading && styles.listing}`}>
        <Head keys={keys} head={head} />
        <tbody className={styles.table__tbody}>
          {(keys.length > 0) ? (
            dataTable.map(record => <Row key={record.id} record={record} deletePost={deletePost} getPost={getPost} />)
          ) : (
              <tr>
                <td className={styles.table__notItem}>Nenhum registro encontrado.</td>
              </tr>
            )}
        </tbody>
      </table>
    </>
  )
}

export default Table
