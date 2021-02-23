import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Home.module.scss'
import { businessCard } from '../../store/business/businessGet'

import PieGraph from './Graphs'
import Breadcrumb from '../Template/Breadcrumb'
import Card from './Card'

const Home = () => {
  const dispatch = useDispatch();
  const { cardFinanceiro: data } = useSelector(state => state.business)

  React.useEffect(() => {
    dispatch(businessCard())
  }, [dispatch])

  return (
    <section>
      <Breadcrumb title="Dashboard" path="Painel de Controle" />
      <div className={`${styles.card__finaceiro} animeLeft`}>
        <Card color="receita" valor={data?.receita} />
        <Card color="despesa" valor={data?.despesa} />
        <Card color="total" valor={data?.total} />
      </div>
      <div className="animeLeft dashboard__graphs">
        <PieGraph data={data} />
      </div>
    </section>
  )
}

export default Home
