import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import useFetch from 'Hooks/useFetch'

import { DELETE_BUSSINESS } from 'Services/api'
import { getBusiness } from 'store/business/businessGet';

import Loading from 'Components/Helper/Loading'
import Error from 'Components/Helper/Error'
import NoRegistry from 'Components/Helper/NoRegistry'

import Search from 'Components/Template/Table/Search'
import Table from 'Components/Template/Table'
import Pagination from 'Components/Template/Table/Pagination'

const Listing = () => {
  const [businessTag, setBusinessTag] = React.useState('');
  const [page, setPage] = React.useState(1)
  const [search, setSearch] = React.useState('')
  const [dataTable, setDataTable] = React.useState([])

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector(state => state.user.data)
  const { request: requestDelete } = useFetch()
  const { loading, error, business } = useSelector(state => state.business)
  const state = useSelector(state => state)

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
  return (
    <React.Fragment>
      {(business !== null && business.length > 0) && (
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
      )}
      
      {(business.length === 0) && (
        <NoRegistry path={`/${businessTag}/cadastrar`} />
      )}
    </React.Fragment>
  )
}

export default Listing
