import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Home.module.scss'
import { businessCard } from '../../store/business/businessGet'

import PieGraph from './Graphs'
import Breadcrumb from '../Template/Breadcrumb'
import Card from './Card'
import Head from '../Helper/Head'

const Home = () => {
  const [graph, setGraph] = React.useState(null)
  const dispatch = useDispatch();
  const { cardFinanceiro: data } = useSelector(state => state.business)

  React.useEffect(() => {
    dispatch(businessCard())
  }, [dispatch])

  React.useEffect(() => {
    if (data.receita === "R$ 0,00") return setGraph('Para exibir os gráficos é necessário existe uma Receita')
    if (data.despesa === "R$ 0,00") return setGraph('Para exibir os gráficos é necessário existe uma Despesa')
    return setGraph(null)
  }, [data])

  return (
    <section>
      <Head title="Home" />
      <Breadcrumb title="Dashboard" path="Painel de Controle" />
      <div className={`${styles.card__finaceiro} animeLeft`}>
        <Card color="receita" valor={data?.receita} />
        <Card color="despesa" valor={data?.despesa} />
        <Card color="total" valor={data?.total} />
      </div>
      {graph ? (
        <div className="animeLeft dashboard__graphs">
          <PieGraph data={data} />
        </div>
      ) : (
          <p>{graph}</p>
        )}

    </section>
  )
}

export default Home
