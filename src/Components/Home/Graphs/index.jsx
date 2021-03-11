import React from 'react'
import styles from './PieGraphs.module.scss'
import {
  VictoryPie as Pie,
  VictoryChart as Chart,
  VictoryBar as Bar
} from 'victory';
import { useSelector } from 'react-redux';

const PieGraphs = () => {
  const { cardFinanceiro: data, loading, error } = useSelector(state => state.cardBusiness)
  const [graph, setGraph] = React.useState([]);

  React.useEffect(async () => {
    let dataGraph = [];

    await Object.keys(data).forEach(function (item, index) {
      dataGraph.push({
        x: item,
        y: Number(data[item].replace('R$ ', '').replace('.', '').replace(',', '.'))
      })
    });

    await setGraph(dataGraph);
  }, [data])

  return (
    <div className={styles.graph}>
      <div className={styles.graphItem}>
        <Pie
          data={graph}
          innerRadius={50}
          colorScale={["#00c0ef", "#dd4b39", "#00a65a"]}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2
            },
            labels: {
              fontSize: 14,
              fill: '#333'
            },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <Chart
          padding={{ top: 20, bottom: 20, left: 100, right: 100 }}
        >
          <Bar
            barRatio={1.2}
            alignment="start"
            data={graph}
            style={{
              data: {
                fill: (item) => ((item.datum.xName === 'receita') ? '#00c0ef' : (item.datum.xName === 'despesa' ? '#dd4b39' : '#00a65a'))
              }
            }}
          />
        </Chart>
      </div>
    </div>
  )
}

export default PieGraphs
