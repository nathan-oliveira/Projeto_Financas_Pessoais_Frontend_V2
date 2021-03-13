import React from 'react'
import { Link } from 'react-router-dom'

const NoRegistry = ({ path }) => {
  return (
    <div className="animeLeft empty__table">
      <h1 className="title__empty__table">Nenhum registro encontrado!</h1>
      <Link to={path}>Criar agora!</Link>
    </div>
  )
}

export default NoRegistry
