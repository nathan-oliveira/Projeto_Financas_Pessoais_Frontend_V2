import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useFetch from 'Hooks/useFetch'
import { GET_CATEGORY, DELETE_CATEGORY } from 'Services/api'

import Error from 'Components/Helper/Error'
import Loading from 'Components/Helper/Loading'
import NoRegistry from 'Components/Helper/NoRegistry'
import Table from 'Components/Template/Table'
import Pagination from 'Components/Template/Table/Pagination'
import Search from 'Components/Template/Table/Search'

const Listing = () => {
  const [page, setPage] = React.useState(1)
  const [search, setSearch] = React.useState('')
  const [dataTable, setDataTable] = React.useState([])
  const navigate = useNavigate();

  const { token } = useSelector(state => state.user.data)
  const { data, loading, error, request} = useFetch()
  const { request: requestDelete } = useFetch()
  
  React.useEffect(() => {
    const { url, options } = GET_CATEGORY(token)
    request(url, options)
  }, [])

  async function deleteCategory(id) {
    const confirm = window.confirm('Tem certeza que deseja deletar?')

    if (confirm) {
      const { url, options } = DELETE_CATEGORY({ id, token })
      const { response } = await requestDelete(url, options)

      if (response.ok) {
        const { url, options } = GET_CATEGORY(token)
        request(url, options)
      }
    }
  }

  async function getCategory(id) {
    navigate(`/categoria/editar/${id}`)
  }

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  return (
    <React.Fragment>
      {(data !== null) ? (
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
      ) : (
        <NoRegistry path="/categoria/cadastrar" />
      )}
    </React.Fragment>
  )
}

export default Listing