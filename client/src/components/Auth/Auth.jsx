import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../../utils/Input';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setIsSignup] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = () => {
    
  }

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword )
  return (
    <AuthWrap className='sub-bg-color-dark'>
      <form onSubmit={handleSubmit} className='border pd-2 sub-bg-color-light box-shadow-deep'>
        <p className='text-center pd-1'>{isSignup ? "로그인" : "회원가입"}</p>
        { isSignup && (
          <>
            <Input name="이름" label="FirsthBane" handleChange={handleChange} />
          </>
        )}
        <Input 
          name="이메일" 
          type="email" 
          label="Email Address" 
          handleChange={handleChange} 
        />
        <Input 
          name="비밀번호" 
          type={showPassword ? 'text' : 'password'}
          handleShowPassword={handleShowPassword} 
          label="Password" 
          handleChange={handleChange} 
        />
        { isSignup && 
          <Input 
            name="비밀번호 확인" 
            label="Repeat Password" 
            handleChange={handleChange}  
            type="password"  
          />
        }
        <button className='btn highlight-bg-color'>{isSignup ? '회원가입' : '로그인'}</button>
      </form>
    </AuthWrap>
  )
}

export default Auth

const AuthWrap = styled.main`
  width: 100%;
  height: 100%;

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 450px;
    margin: 150px auto 0 auto;

    input{
      width: 100%;
      margin: 15px;
    }

    button{
      margin-top: 30px;
      width: 100%;
    }
  }
`;