import React from 'react'
import styles from './Expenditure.module.scss'
import { Routes, Route, useLocation } from 'react-router-dom'

import Breadcrumb from 'Components/Template/Breadcrumb'
import HeaderMenu from 'Components/Template/HeaderMenu'
import NotFound from 'Components/Helper/NotFound'
import Head from 'Components/Helper/Head'

import Listing from './Listing'
import Form from './Form'

const Expenditure = () => {
  const [businessTag, setBusinessTag] = React.useState('');
  const [breadcrumbTag, setBreadcrumbTag] = React.useState('')
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname.includes('receita')) {
      setBusinessTag('/receita')
      setBreadcrumbTag('Receitas')
    }

    if (location.pathname.includes('despesa')) {
      setBusinessTag('/despesa')
      setBreadcrumbTag('Despesas')
    }
  }, [location])

  return (
    <section>
      <Head title={breadcrumbTag} />
      <Breadcrumb title={breadcrumbTag} path={businessTag} />

      <div className={styles.content__page}>
        <HeaderMenu path={businessTag} />
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

export default Expenditure
