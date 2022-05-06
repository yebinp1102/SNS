import React, { useEffect } from 'react'
import { CircularProgress } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import moment from 'moment' // 시간 관리 리액트 라이브러리

import { getPost } from '../../_actions/posts'

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  
  useEffect(() => {
    dispatch(getPost(id));
  },[id])

  useEffect(()=>{
    console.log('post :', post )
  },[post])

  if(!post) return null;

  if(isLoading){
    return <div>
      <CircularProgress size="7em" />
    </div>
  }

  return (
    <DetailWrap className='border sub-bg-color-light box-shadow-shallow pd-2 mg-2'>
      <DetailContent>
        <h1>{post?.title}</h1>
        <p className='tags'>{post?.tags.map((tag, idx) => <span key={idx}>#{tag} </span>)} </p>
        <p>작성자 : {post?.name}</p>
        <p>작성일 : {post?.createdAt.slice(0, 10)}</p>
        <br/>
        <p>{post?.message}</p>
      </DetailContent>
      <img src={post?.selectedFile} alt={post?.title} />
      {/* 추천 게시글 기능 자리 */}
    </DetailWrap>
  )
}

export default PostDetails

const DetailWrap = styled.div`
  display: flex;
  gap: 30px;

  img{
    flex: .4;
  }
`;

const DetailContent = styled.div`
  flex: .6;
  width: 100%;

  .tags{
    color: #888;
  }

  p{
    margin: 1rem 0;
  }
`;