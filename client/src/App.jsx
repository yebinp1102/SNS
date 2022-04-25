import React from 'react'
import styled from 'styled-components'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

// svg icons
import InterestsIcon from '@mui/icons-material/Interests';
import Button from './utils/Button';
import Input from './utils/Input';

const App = () => {
  return (
    <AppWrap className='sub-bg-color-dark'>
      <Header className='box-shadow-shallow sub-bg-color-light'>
        <div className='logo'>
          <InterestsIcon />
          <h1 className='main-color-dark'>SNS</h1>
        </div>
        <div className='rightNav'>
          <Input type={'text'} name={'searchContent'} placeholder={'내용 검색'} />
          <Input type={'text'} name={'searchTag'} placeholder={'태그 검색'} />
          <Button name={"로그인"} />
        </div>
      </Header>
      <Main className='pd-2'>
        <Posts/>
        <Form />
      </Main>
    </AppWrap>
  )
}

export default App

const AppWrap = styled.div`
  height: 100vh;
  width: 100vw;
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
  display: grid;
  gap: 40px;
  grid-template-columns: 2fr 1fr;
  height: calc(100vh - 80px);
`;

