import React from 'react'
import styles from './Select.module.scss'

const Select = ({ label, name, value, onChange, error, onBlur, options }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={error ? styles.label__error : styles.label}>{label}:</label>
      <select
        className={error ? styles.select__error : (value === '' ? styles.select : styles.select__success)}
        id={name}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      >
        <option value="" hidden disabled>Selecione...</option>
        {options.map((op) => (
          <option value={op.id} key={op.id}>{op.name}</option>
        ))}
      </select>
      {error && <p className={styles.msg__error}>{error}</p>}
    </div>
  )
}

export default Select