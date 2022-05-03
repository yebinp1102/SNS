import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import Pagination from '../Pagination'

// Redux
import { useDispatch } from 'react-redux'
import { getPosts } from '../../_actions/posts'

const Home = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);

  // 어플 렌더링하자마자 모든 포스트를 불러오기 위한 action을 dispatch
  useEffect(()=>{
    dispatch(getPosts());
  },[currentId, dispatch])

  return (
    <Main className='pd-2 sub-bg-color-dark'>
      <Posts setCurrentId={setCurrentId} />
      <div className='sideBar'>
        <Form currentId={currentId} setCurrentId={setCurrentId} />
        <Pagination />
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