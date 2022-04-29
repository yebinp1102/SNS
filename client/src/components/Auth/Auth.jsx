import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../../utils/Input';
import { useDispatch } from 'react-redux'
// icons
import LockOpenIcon from '@mui/icons-material/LockOpen';
import GoogleIcon from '@mui/icons-material/Google';
// googleLogin
import { AUTH } from '../../_actions/types'
import { GoogleLogin } from 'react-google-login'
import { useNavigate } from 'react-router-dom';


const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = () => {
    
  }

  const SwitchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup)
    handleShowPassword(false);
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj; // res 값 존재하지 않으면 에레 대신 undefined 반환
    const token = res?.tokenId;
    try{
      dispatch({ type: AUTH, data: { result, token } });
      navigate('/');
    }catch(err){
      console.log(err)
    }
  }

  const googleError = (err) => {
    console.log(err)
    console.log("구글 로그인에 실패 했습니다. 다시 시도해 주세요.")
  }

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword )
  
  return (
    <AuthWrap className='sub-bg-color-dark center'>
      <form onSubmit={handleSubmit} className='border pd-2 sub-bg-color-light box-shadow-deep'>
        <div className='center'>
          <LockOpenIcon className='warning-color' />
          <h3 className='text-center pd-1'>{isSignup ? "회원가입" : "로그인"}</h3>
        </div>
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
        <GoogleLogin 
          clientId='927882145131-vbaqj9ii9mhp98a07gr2rolktovtcku5.apps.googleusercontent.com'
          render={(renderProps) => (
            <button className='btn center warning-bg-color' disabled={renderProps.disabled} onClick={renderProps.onClick} >
              <GoogleIcon style={{marginRight: "5px", fontSize: "small"}} />
              <span>구글 계정으로 로그인하기</span>
            </button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleError}
          cookiePolicy="single_host_origin"
        />
        <p className='cursor flex-end' onClick={SwitchMode}>
          {isSignup ? "이미 계정이 있으신가요? 로그인" : "계정이 없으신가요? 회원가입"}
        </p>
      </form>
    </AuthWrap>
  )
}

export default Auth

const AuthWrap = styled.main`

  form{
    max-width: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
      width: 400px;
      margin: 15px;
    }

    button{
      width: 400px;
      margin-top: 25px;
    }

    .flex-end{
      display: flex;
      align-self: flex-end;
      margin-top: 30px;
      color: #888;
    }

    .flex-end:hover{
      color: #000;
    }

  }
`;