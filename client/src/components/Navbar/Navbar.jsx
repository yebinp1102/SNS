import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode'
import ChipInput from 'material-ui-chip-input'
import { getPostsBySearch } from '../../_actions/posts';

import InterestsIcon from '@mui/icons-material/Interests';
import Button from '../../utils/Button';
import { LOGOUT } from '../../_actions/types';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);

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

  const handlekeyPress = (e) => {
    if(e.keyCode === 13){ /// keyCode 13은 엔터 입력을 의미.
      // 게시글 검색
      searchPost();
    }
  }

  const handleAdd = (tag) => setTags([...tags, tag]);

  const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete )) 

  const searchPost = () => {
    if(search.trim() || tags){
      // dispatch -> fetch search post
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }))
      navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
    }else{
      navigate('/');
    }
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
        <input 
          className='input'
          type='text' 
          placeholder='내용 검색' 
          value={search} 
          onChange={(e)=>setSearch(e.target.value)}
          onKeyPress={handlekeyPress}
        />
        <ChipInput 
          value = {tags}
          onAdd = {handleAdd}
          onDelete = {handleDelete}
          placeholder="태그로 검색"
        />
        <button className='btn' onClick={searchPost}>검색</button>
        
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