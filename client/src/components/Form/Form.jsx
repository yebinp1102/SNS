import React, { useState} from 'react'
import styled from 'styled-components'
import FileBase from 'react-file-base64'

import Button from '../../utils/Button'
import Input from '../../utils/Input'

const Form = () => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  });

  const handleSubmit = () => {
    
  }

  const clear = () => {
    
  }

  return (
    <FormWrap className='pd-1 border box-shadow-deep'>
      <form autoComplete='off' noValidate onSubmit={handleSubmit}>
        <p>글 작성하기</p>
        <InputWrap>
          <input
            placeholder='작성자'
            name='creator'
            label="Creator"
            value={postData.creator}
            onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
          />
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
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          />
        </InputWrap>
        <div className='fileBase'>
          <FileBase 
            type="file"
            multiple={false}
            onDone={(base64) => setPostData({ ...postData, selectedFile: base64}) }
          />
        </div>
        <Button
          className="highlight-bg-color"
          name="작성하기"
          type="submit" 
        />
        <Button
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