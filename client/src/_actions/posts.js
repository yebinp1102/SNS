import * as api from '../api'
import { FETCH_ALL } from './types'

// Action Creators : 액션을 반환하는 함수
export const getPosts = () => async (dispatch) => {
  try{
    const { data } = await api.fetchPost()
    dispatch({ type: FETCH_ALL, payload: data });
  }catch(err){
    console.log(err.message)
  }
}
