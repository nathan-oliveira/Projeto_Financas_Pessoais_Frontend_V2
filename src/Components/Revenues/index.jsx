import React from 'react'
import styles from './Revenues.module.scss'
import { Routes, Route } from 'react-router-dom'

import Breadcrumb from '../Template/Breadcrumb'
import HeaderMenu from '../Template/HeaderMenu'

import Listing from './Listing'
import Form from '../Business/Form'
import NotFound from '../Helper/NotFound'

const Revenues = () => {
  return (
    <section>
      <Breadcrumb title="Receitas" path="/receita" />

      <div className={styles.content__page}>
        <HeaderMenu path="/receita" />
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="/cadastrar" element={<Form />} />
          <Route path="/editar/:id" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  )
}

export default Revenues
