import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../_actions/posts';
// icons
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';

const Post = ({post, setCurrentId}) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'))

  return (
    <PostBox className='box-shadow-shallow border'>
      <PreviewTop 
        className='pd-1' 
        style={{backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${post.selectedFile})`}}
      >
        <div>
          <p>{post.name}</p>
          <p>{(post.createdAt).slice(0,10)}</p>
        </div>
        <MoreHorizIcon className='cursor' onClick={() => setCurrentId(post._id)} />
      </PreviewTop>
      <PreviewBottom className='pd-1'>
        <div>
          <p>{post.tags.map((tag) => `#${tag} `)}</p>
          <h2>{post.title}</h2>
          <p>{post.message}</p>
        </div>
        <Btns>
          <button className='cursor highlight-color' onClick={() => dispatch(likePost(post._id))}>
            <ThumbUpIcon />
            <span>좋아요 ({post.likes})</span>
          </button>
          <button className='cursor warning-color' onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon/>
            <span>삭제하기</span>
          </button>
        </Btns>
      </PreviewBottom>
    </PostBox>
  )
}

export default Post

const PostBox = styled.div`
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const PreviewTop = styled.div`
  background-size: cover;
  background-position: center center;
  color: #fff;
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PreviewBottom = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p{
    margin-bottom: 10px;
    color: #555;
  }
`;

const Btns = styled.div`
  display: flex;
  justify-content: space-between;

  button{
    background-color:transparent;
    border none;
    display: flex;
    align-items: center;
  }

  svg{
    font-size: 1.25rem;
    margin-right: 5px;
  }
`;