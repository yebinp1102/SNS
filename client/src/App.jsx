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
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </AppWrap>
    </BrowserRouter>
  )
}

export default App

const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
