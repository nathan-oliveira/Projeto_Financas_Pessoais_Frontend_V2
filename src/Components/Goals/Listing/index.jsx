import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { fetchGoals } from '../../../store/goals/goalsGet'
import { goalDelete } from '../../../store/goals/goalDelete'

import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import Table from '../../Template/Table';
import Pagination from '../../Template/Table/Pagination';
import Search from '../../Template/Table/Search';

const Listing = () => {
  const [page, setPage] = React.useState(1)
  const [search, setSearch] = React.useState('')
  const [dataTable, setDataTable] = React.useState([])

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector(state => state.token.data)
  const { loading, error, data } = useSelector(state => state.goals)

  React.useEffect(() => {
    dispatch(fetchGoals(token))
  }, [dispatch])

  async function deleteGoal(id) {
    const confirm = window.confirm('Tem certeza que deseja deletar?');

    if (confirm) {
      await dispatch(goalDelete({ id, token }))
      dispatch(fetchGoals(token))
    }
  }

  async function getGoal(id) {
    navigate(`/metas/editar/${id}`)
  }

  if (loading) return <Loading />
  if (error) return <Error />
  if (data.length > 0) return (
    <div className="animeLeft">
      <Search setQuery={setSearch} />
      <Table
        dataTable={dataTable}
        loading={loading}
        deletePost={deleteGoal}
        getPost={getGoal}
        head={{ id: 'Código', description: 'Descrição', types: 'Tipo', money: 'Valor' }}
      />
      <Pagination
        data={data}
        setPage={setPage}
        page={page}
        search={search}
        setDataTable={setDataTable}
      />
    </div>
  )
  else
    return (
      <div className="animeLeft empty__table">
        <h1 className="title__empty__table">Nenhum registro encontrado!</h1>
        <Link to="/metas/cadastrar">Criar agora!</Link>
      </div>
    );
}

export default Listing
