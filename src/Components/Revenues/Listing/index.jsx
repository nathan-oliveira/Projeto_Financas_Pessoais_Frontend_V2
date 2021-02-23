import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchReceita } from '../../../store/business/recipeGet';
import { businessDelete } from '../../../store/business/businessDelete'

import Loading from '../../Helper/Loading'
import Error from '../../Helper/Error'
import Search from '../../Template/Table/Search'
import Table from '../../Template/Table'
import Pagination from '../../Template/Table/Pagination'

const Listing = () => {
  const [pageDefault] = React.useState(9)
  const [page, setPage] = React.useState(1)
  const [search, setSearch] = React.useState('')
  const [dataTable, setDataTable] = React.useState([])

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector(state => state.token.data)
  const { loading, error, recipe } = useSelector(state => state.recipe)

  React.useEffect(() => {
    dispatch(fetchReceita())
  }, [dispatch])

  async function deleteRevenues(id) {
    const confirm = window.confirm('Tem certeza que deseja deletar?');

    if (confirm) {
      await dispatch(businessDelete({ id, token }))
      dispatch(fetchReceita())
    }
  }

  async function getRevenues(id) {
    navigate(`/receita/editar/${id}`)
  }

  if (loading) return <Loading />;
  if (error) return <Error error={error} />
  if (recipe.length > 0) return (
    <div className="animeLeft">
      <Search setQuery={setSearch} />
      <Table
        dataTable={dataTable}
        loading={loading}
        deletePost={deleteRevenues}
        getPost={getRevenues}
        head={{ id: 'Código', description: 'Descrição', money: 'Valor', category: 'Categoria' }}
      />
      <Pagination
        data={recipe}
        setPage={setPage}
        page={page}
        search={search}
        pageDefault={pageDefault}
        setDataTable={setDataTable}
      />
    </div>
  )
  else return null;
}

export default Listing
