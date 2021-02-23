import React from 'react'

const Head = (props) => {
  React.useEffect(() => {
    document.title = `${props.title} | Cad.Usuário`
    document.querySelector("meta[name='description']").setAttribute('content', props.description || 'Cadastro de Usuário')
  }, [props])

  return (
    <>
    </>
  )
}

export default Head;