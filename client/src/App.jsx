import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import PostDetails from './components/PostDetails/PostDetails'
// react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Auth from './components/Auth/Auth'

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <BrowserRouter>
      <AppWrap>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Navigate replace to="/posts" />} />
          <Route path='/posts' element={<Home />} />
          <Route path='/posts/search' element={<Home />} />
          <Route path='/posts/:id' element={<PostDetails />} />
          {/* 사용자가 이미 로그인에 성공한 경우엔 로그인 페이지에 접근할 수 없도록 */}
          <Route path='/auth' element={!user ? <Auth /> : <Navigate replace to='/posts' />} />
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
