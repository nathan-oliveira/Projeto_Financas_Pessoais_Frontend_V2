import React from 'react'
import styles from './Goals.module.scss'
import { Routes, Route } from 'react-router-dom'

import Breadcrumb from '../Template/Breadcrumb'
import HeaderMenu from '../Template/HeaderMenu'
import Head from '../Helper/Head'

import Listing from '../Goals/Listing'
import NotFound from '../Helper/NotFound'

const Goals = () => {
  return (
    <section>
      <Head title="Metas" />
      <Breadcrumb title="Metas" path="/metas" />

      <div className={styles.content__page}>
        <HeaderMenu path="/metas" />
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  )
}

export default Goals
