import * as api from '../api'
import { AUTH } from './types'

export const signin = (formData, navigate) => async(dispatch) => {
  try{
    // login the user
    navigate('/')
  }catch(err){
    console.log(err)
  }
}

export const signup = () => async(dispatch) => {
  try{
    // signup the user
    navigate('/')
  }catch(err){
    console.log(err)
  }
}