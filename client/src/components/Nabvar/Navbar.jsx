import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import InterestsIcon from '@mui/icons-material/Interests';
import Button from '../../utils/Button';
import Input from '../../utils/Input'

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  useEffect(()=>{
    const token = user?.token;
    // 구글 로그인 시 token을 제공하기 때문에 jwt 사용할 필요 X
    setUser(JSON.parse(localStorage.getItem('profile')))
  },[])

  const logout = () => {

  }

  console.log(user);
  return (
    <Header className='box-shadow-shallow sub-bg-color-light'>
      <div className='logo'>
        <Link to='/'>
          <InterestsIcon />
          <h1 className='main-color-dark'>SNS</h1>
        </Link>
      </div>
      <div className='rightNav'>
        <Input witdh='300px' type='text' name='내용 검색' />
        <Input width='300px' type='text' name='태그 검색' />
        { user ? (
          <div className='center'>
            <p className='username'>{user.result.name}</p>
            <Button 
              name={"로그아웃"}
              className="highlight-bg-color" 
              onClick={logout}
            />
          </div>
        ) : ( 
          <Link to='/auth'>
            <Button name={"로그인"} className="highlight-bg-color" />
          </Link>
        )}
      </div>
    </Header>
  )
}

export default Navbar

const Header = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  .logo{
    a{
      display: flex;
      align-items: center;
      font-size: 1rem;
    
      svg{
        color: #00B4D8;
        margin-right: 5px;
        margin-top: -3px;
      }
    }
  }

  .rightNav{
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0 4rem;

    .username{
      margin: 0 40px;
      font-size: 1.25rem;
    }
  }
`;