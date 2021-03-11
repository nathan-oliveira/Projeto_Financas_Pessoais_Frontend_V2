import React from 'react'
import { useSelector } from 'react-redux'
import Avatar from '../../../Assets/img/avatar.png'

const Image = () => {
  const [foto, setFoto] = React.useState(Avatar);
  const { data: dataToken } = useSelector(state => state.user)

  React.useEffect(() => {
    setFoto((dataToken.foto === "") ? Avatar : dataToken.foto)
  }, [dataToken])

  return (
    <img src={foto} alt="Foto de Perfil" width="200px" />
  )
}

export default Image
