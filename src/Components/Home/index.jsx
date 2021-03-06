import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Home.module.scss'
import { businessCard } from 'store/business/cardGet'

import Breadcrumb from 'Components/Template/Breadcrumb'
import Head from 'Components/Helper/Head'
import Loading from 'Components/Helper/Loading'
import Error from 'Components/Helper/Error'

import PieGraph from './Graphs'
import Card from './Card'

const Home = () => {
  const [graphs, setGraphs] = React.useState('')
  const dispatch = useDispatch();
  const { cardFinanceiro: data, loading, error } = useSelector(state => state.cardBusiness)

  React.useEffect(() => {
    dispatch(businessCard())
  }, [dispatch])

  React.useEffect(() => {
    if (data.receita === "R$ 0,00") return setGraphs('Para exibir os gráficos é necessário existe uma Receita cadastrada')
    if (data.despesa === "R$ 0,00") return setGraphs('Para exibir os gráficos é necessário existe uma Despesa cadastrada')

    setGraphs('')
  }, [data, graphs])

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data) return (
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
          <PieGraph />
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
