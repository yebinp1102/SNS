import * as api from '../api'
import { AUTH } from './types'

// action creators
export const signin = (formData, navigate) => async(dispatch) => {
  try{
    const { data } = await api.signIn(formData); // DB로부터 로그인을 위한 데이터를 가져온다. 
    dispatch({ type: AUTH, data });
    navigate('/')
  }catch(err){
    console.log(err)
  }
}

export const signup = (formData, navigate) => async(dispatch) => {
  try{
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    navigate('/')
  }catch(err){
    console.log(err)
  }
}