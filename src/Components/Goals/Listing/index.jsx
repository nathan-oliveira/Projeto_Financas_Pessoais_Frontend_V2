import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

import useFetch from '../../../Hooks/useFetch'
import { GET_GOALS, DELETE_GOAL } from '../../../Services/api'

import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import Table from '../../Template/Table';
import Pagination from '../../Template/Table/Pagination';
import Search from '../../Template/Table/Search';

const Listing = () => {
  const [page, setPage] = React.useState(1)
  const [search, setSearch] = React.useState('')
  const [dataTable, setDataTable] = React.useState([])

  const navigate = useNavigate();

  const { token } = useSelector(state => state.user.data)
  const { data, loading, error, request} = useFetch()
  const { request: requestDelete } = useFetch()

  React.useEffect(() => {
    const { url, options } = GET_GOALS(token)
    request(url, options)
  }, [])

  async function deleteGoal(id) {
    const confirm = window.confirm('Tem certeza que deseja deletar?');

    if (confirm) {
      const { url, options } = DELETE_GOAL({ id, token })
      const { response } = await requestDelete(url, options)

      if (response.ok) {
        const { url, options } = GET_GOALS(token)
        request(url, options)
      }
    }
  }

  async function getGoal(id) {
    navigate(`/metas/editar/${id}`)
  }

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data !== null && data.length > 0) return (
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
