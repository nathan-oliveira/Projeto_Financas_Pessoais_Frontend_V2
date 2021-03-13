import React from 'react'

const If = (props) => {
  if (props.test) {
    return props.children
  } else {
    return false
  }
}

export default If
