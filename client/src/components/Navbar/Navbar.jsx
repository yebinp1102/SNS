import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode'

import InterestsIcon from '@mui/icons-material/Interests';
import Button from '../../utils/Button';
import Input from '../../utils/Input'
import { LOGOUT } from '../../_actions/types';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  // 로그인을 했을 때, 새로 고침을 하지 않아도 유저 정보가 자동 업데이트 되도록 설정
  useEffect(()=>{
    const token = user?.token;
    // 구글 로그인 시, token이 자동 생성되기 때문에 jwt 사용할 필요 X
    if(token){
      const decodedToken = decode(token);
      // 토큰이 만료된 경우, 자동으로 로그아웃 되도록 설정
      if(decodedToken.exp * 1000 < new Date().getTime()) logout()
    }
    setUser(JSON.parse(localStorage.getItem('profile')))
  },[location])

  const logout = () => {
    dispatch({ type: LOGOUT })
    navigate('/')
    setUser(null);
  }
  return (
    <Header className='box-shadow-shallow sub-bg-color-light'>
      <div className='logo'>
        <Link to='/'>
          <InterestsIcon />
          <h1 className='main-color-dark'>SNS</h1>
        </Link>
      </div>
      <div className='rightNav'>
        <Input witdh='300px' type='text' placeholder='내용 검색' />
        <Input width='300px' type='text' placeholder='태그 검색' />
        { user ? (     //  유저 정보가 있으면 유저 이름과 로그아웃 버튼, 없으면 로그인 버튼을 보여준다. 
          <div className='center'>
            <p className='username'>{user.result.name} 님</p>
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