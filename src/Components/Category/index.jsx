import React from 'react'
import styles from './Category.module.scss'
import { Routes, Route } from 'react-router-dom'

import Breadcrumb from 'Components/Template/Breadcrumb'
import HeaderMenu from 'Components/Template/HeaderMenu'
import Head from 'Components/Helper/Head'
import NotFound from 'Components/Helper/NotFound'

import Listing from './Listing'
import Form from './Form'

const Category = () => {
  return (
    <section>
      <Head title="Categoria" />
      <Breadcrumb title="Categoria" path="/categoria" />

      <div className={styles.content__page}>
        <HeaderMenu path="/categoria" />
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

export default Category
