import React from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import useFetch from '../../../Hooks/useFetch'
import { DELETE_BUSSINESS } from '../../../Services/api'
import { getBusiness } from '../../../store/business/businessGet';

import Loading from '../../Helper/Loading'
import Error from '../../Helper/Error'
import Search from '../../Template/Table/Search'
import Table from '../../Template/Table'
import Pagination from '../../Template/Table/Pagination'

const Listing = () => {
  const [businessTag, setBusinessTag] = React.useState('');
  const [page, setPage] = React.useState(1)
  const [search, setSearch] = React.useState('')
  const [dataTable, setDataTable] = React.useState([])

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector(state => state.token.data)
  const { request: requestDelete } = useFetch()
  const { loading, error, business } = useSelector(state => state.business)

  React.useEffect(() => {
    if (location.pathname.includes('receita')) setBusinessTag('receita')
    if (location.pathname.includes('despesa')) setBusinessTag('despesa')
    dispatch(getBusiness(businessTag))
  }, [location, dispatch, businessTag])

  async function deleteRevenues(id) {
    const confirm = window.confirm('Tem certeza que deseja deletar?');

    if (confirm) {
      const { url, options } = DELETE_BUSSINESS({ id, token })
      const { response } = await requestDelete(url, options)
      
      if (response.ok) dispatch(getBusiness(businessTag))
    }
  }

  async function getRevenues(id) {
    navigate(`/${businessTag}/editar/${id}`)
  }

  if (loading) return <Loading />;
  if (error) return <Error error={error} />
  if (business !== null && business.length > 0) return (
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
        data={business}
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
        <Link to={`/${businessTag}/cadastrar`}>Criar agora!</Link>
      </div>
    );
}

export default Listing
