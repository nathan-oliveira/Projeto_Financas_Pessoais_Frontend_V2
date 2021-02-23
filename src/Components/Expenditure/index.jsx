import React from 'react'
import styles from './Expenditure.module.scss'
import { Routes, Route } from 'react-router-dom'

import Breadcrumb from '../Template/Breadcrumb'
import HeaderMenu from '../Template/HeaderMenu'

import Listing from './Listing'
import Form from '../Business/Form'
import NotFound from '../Helper/NotFound'

const Expenditure = () => {
  return (
    <section>
      <Breadcrumb title="Despesas" path="/despesa" />
    </section>
  )
}

export default Expenditure
