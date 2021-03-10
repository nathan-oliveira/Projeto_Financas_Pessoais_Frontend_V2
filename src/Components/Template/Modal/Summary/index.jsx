import React from 'react'

const Summary = ({ children }) => {
  return (
    <summary>
      {children}
      <div className="details__modal__overlay"></div>
    </summary>
  )
}

export default Summary;
