import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import InterestsIcon from '@mui/icons-material/Interests';
import Button from '../../utils/Button';
import Input from '../../utils/Input'

const Navbar = () => {
  const user = null;
  return (
    <Header className='box-shadow-shallow sub-bg-color-light'>
      <div className='logo'>
        <Link to='/'>
          <InterestsIcon />
          <h1 className='main-color-dark'>SNS</h1>
        </Link>
      </div>
      <div className='rightNav'>
        <Input witdh='300px' type='text' name='searchContent' placeholder='내용 검색' />
        <Input width='300px' type='text' name='searchTag' placeholder='태그 검색' />
        { user ? (
          <div>
            <p>{user.result.name}</p>
            <Button 
              name={"로그아웃"}
              className="highlight-bg-color" 
            />
          </div>
        ) : ( 
          <Button 
            name={"로그인"}
            className="highlight-bg-color" 
          />
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
  }
`;