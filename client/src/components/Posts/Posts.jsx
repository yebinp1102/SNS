import React from 'react'
import Post from './Post/Post'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <PostsWrap className='border pd-1 box-shadow-deep'>
      <h2 className='pd-1 main-color-dark'>최신 글</h2>
      <PostWrap className='pd-1 sub-bg-color-dark border'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostWrap>
    </PostsWrap>
  )
}

export default Posts

const PostsWrap = styled.div`
  flex: 3;
  height: calc(100vh - 145px);
  background-color: #F9F7F7;
  display: flex;
  flex-direction: column;
`;

const PostWrap = styled.div`
  margin-top: 1rem;
  flex: 1;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;