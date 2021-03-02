import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Home.module.scss'
import { businessCard } from '../../store/business/businessGet'

import PieGraph from './Graphs'
import Breadcrumb from '../Template/Breadcrumb'
import Card from './Card'
import Head from '../Helper/Head'

const Home = () => {
  const [graphs, setGraphs] = React.useState('')
  const dispatch = useDispatch();
  const { cardFinanceiro: data } = useSelector(state => state.business)

  React.useEffect(() => {
    dispatch(businessCard())
  }, [dispatch])

  React.useEffect(() => {
    if (data.receita === "R$ 0,00") return setGraphs('Para exibir os gráficos é necessário existe uma Receita cadastrada')
    if (data.despesa === "R$ 0,00") return setGraphs('Para exibir os gráficos é necessário existe uma Despesa cadastrada')

    setGraphs('')
  }, [data, graphs])

  return (
    <section>
      <Head title="Home" />
      <Breadcrumb title="Dashboard" path="Painel de Controle" />
      <div className={`${styles.card__finaceiro} animeLeft`}>
        <Card color="receita" valor={data?.receita} />
        <Card color="despesa" valor={data?.despesa} />
        <Card color="total" valor={data?.total} />
      </div>
      {graphs === '' ? (
        <div className="animeLeft dashboard__graphs">
          <PieGraph data={data} />
        </div>
      ) : (
          <div className={`animeLeft ${styles.empty__graphs}`}>
            <p>{graphs}</p>
          </div>
        )}

    </section>
  )
}

export default Home
