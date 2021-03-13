import React from 'react'
import styles from '../table.module.scss'

import { ReactComponent as Trash } from 'Assets/svg/trash.svg'
import { ReactComponent as Edit } from 'Assets/svg/edit.svg'

const Row = ({ record, getPost, deletePost, head }) => {
  const keys = Object.keys(record)
  const tableHead = head || {}

  if (record !== '')
    return (
      <tr key={record.id}>
        {keys.map((key, index) => (
          tableHead[key] && <td key={key} className={`table__col${index + 1}`}>{record[key]}</td>
        ))}
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
  else
    return (
      <tr>
        <td>Ops</td>
      </tr>
    )
}

export default Row