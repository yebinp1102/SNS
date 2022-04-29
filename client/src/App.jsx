import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Nabvar/Navbar'
import Home from './components/Home/Home'
// react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './components/Auth/Auth'


const App = () => {
  return (
    <BrowserRouter>
      <AppWrap>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/auth' exact element={<Auth />} />
        </Routes>
      </AppWrap>
    </BrowserRouter>
  )
}

export default App

const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
