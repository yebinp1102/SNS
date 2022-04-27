import React from 'react'
import styled from 'styled-components'

const Post = ({post}) => {
  return (
    <PostBox className='pd-1 box-shadow-shallow border'>
      <div>
        <p>{post.creator}</p>
        <p>{(post.createAt).slice(0,10)}</p>
      </div>
      <div>
        <button className='btn' onClick={() => {}}>
          아이콘
        </button>
      </div>
      <div>
        <p>{post.tags.map((tag) => `#${tag} `)}</p>
      </div>
      <div>
        <p>{post.message}</p>
      </div>
      <div>
        <button className='btn' onClick={() => {}}>좋아요 ({post.likeCount})</button>
        <button className='btn' onClick={() => {}}>삭제하기</button>
      </div>
    </PostBox>
  )
}

export default Post

const PostBox = styled.div`
  height: 100%;
  background-color: #fff;
`;