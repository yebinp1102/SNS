import React from 'react'
import styled from 'styled-components'

const Post = () => {
  return (
    <PostBox className='pd-1 box-shadow-shallow border'>
      <p>포스트</p>
    </PostBox>
  )
}

export default Post

const PostBox = styled.div`
  height: 100%;
  background-color: #fff;
`;