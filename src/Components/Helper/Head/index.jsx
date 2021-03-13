import React from 'react'

const Head = (props) => {
  React.useEffect(() => {
    document.title = `${props.title} | Proj.Financeiro v2`
    document.querySelector("meta[name='description']").setAttribute('content', props.description || 'Projeto Financeiro')
  }, [props])

  return (
    <React.Fragment>
    </React.Fragment>
  )
}

export default Head;