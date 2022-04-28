import * as api from '../api'
import { CREATE, FETCH_ALL, UPDATE, DELETE } from './types'

// Action Creators : 액션을 반환하는 함수
export const getPosts = () => async (dispatch) => {
  try{
    const { data } = await api.fetchPost() // get api 요청을 보내고 기다림
    dispatch({ type: FETCH_ALL, payload: data });
  }catch(err){
    console.log(err)
  }
}

export const createPost = (post) => async (dispatch) => {
  try{
    const { data } = await api.createPost(post) // post api 요청을 보내고 기다림
    dispatch({ type: CREATE, payload: data })
  }catch(err){
    console.log(err);
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try{
    const { data } = await api.updatePost(id, post)
    dispatch({ type: UPDATE, payload: data })
  }catch(err){
    console.log(err)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try{
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id})
  }catch(err){
    console.log(err)
  }
}