import React from 'react'
import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Router from './Router'
import { verifyToken } from 'store/user/userPost'

import Header from 'Components/Template/Header'
import Main from 'Components/Template/Main'
import Sidebar from 'Components/Template/Sidenav'
import Footer from 'Components/Template/Footer'

const App = () => {
  const dispatch = useDispatch();
  const { error, data } = useSelector(state => state.user)

  React.useEffect(() => {
    dispatch(verifyToken())
  }, [dispatch])

  return (
    <React.Fragment>
      <BrowserRouter>
        {(!error && data?.token) && <Header />}
        <Main>
          <Router />
        </Main>
        {(!error && data?.token) && <Sidebar />}
        {(!error && data?.token) && <Footer />}
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
