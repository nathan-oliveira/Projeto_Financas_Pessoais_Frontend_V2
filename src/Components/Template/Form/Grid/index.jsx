import React from 'react'

const Grid = ({ cols, children }) => {
  function toCssClasses(numbers) {
    const cols = numbers ? numbers.split(' ') : []

    let classes = ''

    if (cols[0]) classes += `col_${cols[0]}`
    if (cols[1]) classes += ` col_${cols[1]}`
    if (cols[2]) classes += ` col_${cols[2]}`
    if (cols[3]) classes += ` col_${cols[3]}`

    return classes
  }

  return (
    <div className={toCssClasses(cols)}>
      {children}
    </div>
  )
}

export default Grid
