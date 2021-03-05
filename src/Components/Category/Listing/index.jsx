import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { fetchCategory } from '../../../store/category/categoryGet'

import Error from '../../Helper/Error'
import Loading from '../../Helper/Loading'
import Table from '../../Template/Table'
import Pagination from '../../Template/Table/Pagination'
import Search from '../../Template/Table/Search'

const Listing = () => {
  const [page, setPage] = React.useState(1)
  const [search, setSearch] = React.useState('')
  const [dataTable, setDataTable] = React.useState([])

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector(state => state.token.data)
  const { loading, error, data } = useSelector(state => state.category)
  
  React.useEffect(() => {
    dispatch(fetchCategory(token))
  }, [dispatch])

  async function deleteCategory(id) {
    const confirm = window.confirm('Tem certeza que deseja deletar?')

    if (confirm) {
      console.log(id)
    }
  }

  async function getCategory(id) {
    navigate(`/categoria/editar/${id}`)
  }

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data.length > 0) return (
    <div className="animeLeft">
      <Search setQuery={setSearch} />
      <Table
        dataTable={dataTable}
        loading={loading}
        deletePost={deleteCategory}
        getPost={getCategory}
        head={{ id: 'Código', name: 'Descrição' }}
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
        <Link to="/categoria/cadastrar">Criar agora!</Link>
      </div>
    )
}

export default Listing