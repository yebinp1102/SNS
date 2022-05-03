import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector} from 'react-redux'

import Button from '../../utils/Button'
import { createPost, updatePost } from '../../_actions/posts'

const initialState = {
  title: '',
  message: '',
  tags: [],
  selectedFile: ''
}

const Form = ({currentId, setCurrentId}) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const user = JSON.parse(localStorage.getItem('profile'))
  const [postData, setPostData] = useState(initialState);

  useEffect(()=>{
    if(post) setPostData(post);
  },[post])
  
  const clear = () => {
    setCurrentId(0);
    setPostData(initialState)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(currentId === 0){
      dispatch(createPost({ ...postData, name: user?.result?.name }))
    }else{
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name })) // _action에서 만든 createPost를 dispatch
    }
    clear();
  }
  // 로그인 하지 않은 유저는 글을 작성할 수 없도록 Form 컴포넌트를 숨긴다.
  if(!user?.result?.name){
    return(
      <div>
        <p>로그인을 하고 다른 사람들과 추억을 공유해보세요!</p>
      </div>
    )
  }

  return (
    <FormWrap className='pd-1 border box-shadow-deep'>
      <form autoComplete='off' noValidate onSubmit={handleSubmit}>
        <p>{currentId ? '편집하기' : '새 글 작성하기'}</p>
        <InputWrap>
          <input
            placeholder='제목'
            name='title'
            label="Title"
            value={postData.title}
            onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          />
          <input
            placeholder='내용'
            name='message'
            label="Message"
            value={postData.message}
            onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          />
          <input
            placeholder='태그'
            name='tags'
            label="Tags"
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
          />
        </InputWrap>
        <div className='fileBase'>
          <FileBase 
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({ ...postData, selectedFile: base64}) }
          />
        </div>
        <Button
          className="highlight-bg-color"
          name="작성하기"
          type="submit" 
        />
        <Button
          className="warning-bg-color"
          name="초기화"
          onClick={clear}
        />
      </form>
    </FormWrap>
  )
}

export default Form

const FormWrap = styled.div`
  flex: 1;
  background-color: #F9F7F7;
  height: auto;

  form{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

   input{
     padding: 10px;
     outline: none;
     border: none;
     border-radius: 5px 5px 0 0 ;
     border-bottom: 1px solid #00B4D8;
     color: #00B4D8;
   }
`;