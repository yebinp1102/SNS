import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import Pagination from '../Pagination'
import { useNavigate, useLocation } from 'react-router-dom'

// Redux
import { useDispatch } from 'react-redux'
import { getPosts } from '../../_actions/posts'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  const query = useQuery();
  const navigate = useNavigate();
  const page = query.get('page') || 1   // 페이지가 있는지 확인하고 없으면 1로 인식
  const searchQuery = query.get('searchQuery')

  return (
    <Main className='pd-2 sub-bg-color-dark'>
      <Posts setCurrentId={setCurrentId} />
      <div className='sideBar'>
        <Form currentId={currentId} setCurrentId={setCurrentId} />
        <Pagination page={page} />
      </div>
    </Main>
  )
}

export default Home

const Main = styled.main`
  display: flex;
  align-items: flex-start;
  gap: 30px;

  .sideBar{
    flex: 1;
  }
`;