import * as api from '../api'
import { CREATE, FETCH_ALL } from './types'

// Action Creators : 액션을 반환하는 함수
export const getPosts = () => async (dispatch) => {
  try{
    const { data } = await api.fetchPost() // get api 요청을 보내고 기다림
    dispatch({ type: FETCH_ALL, payload: data });
  }catch(err){
    console.log(err.message)
  }
}

export const createPost = (post) => async (dispatch) => {
  try{
    const { data } = await api.createPost(post) // post api 요청을 보내고 기다림
    dispatch({ type: CREATE, payload: data })
  }catch(err){
    console.log(err.message);
  }
}