import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

// Redux
import { useDispatch } from 'react-redux'
import { getPosts } from './_actions/posts'
// svg icons
import InterestsIcon from '@mui/icons-material/Interests';
import Button from './utils/Button';
import Input from './utils/Input';

const App = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  // 어플 렌더링하자마자 모든 포스트를 불러오기 위한 action을 dispatch
  useEffect(()=>{
    dispatch(getPosts());
  },[currentId, dispatch])

  return (
    <AppWrap>
      <Header className='box-shadow-shallow sub-bg-color-light'>
        <div className='logo'>
          <InterestsIcon />
          <h1 className='main-color-dark'>SNS</h1>
        </div>
        <div className='rightNav'>
          <Input witdh='300px' type='text' name='searchContent' placeholder='내용 검색' />
          <Input width='300px' type='text' name='searchTag' placeholder='태그 검색' />
          <Button 
            name={"로그인"}
            className="highlight-bg-color" 
          />
        </div>
      </Header>
      <Main className='pd-2 sub-bg-color-dark'>
        <Posts setCurrentId={setCurrentId} />
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </Main>
    </AppWrap>
  )
}

export default App

const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  .logo{
    display: flex;
    align-items: center;
    font-size: 1rem;
  
    svg{
      color: #00B4D8;
      margin-right: 5px;
      margin-top: -3px;
    }
  }

  .rightNav{
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0 4rem;
  }
`;

const Main = styled.main`
  display: flex;
  align-items: flex-start;
  gap: 30px;
`;