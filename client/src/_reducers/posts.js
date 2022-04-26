import {
  FETCH_ALL,
  CREATE
} from '../_actions/types'

export default (posts = [], action) => {
  switch(action.type){
    case FETCH_ALL :
      return action.payload;
    case CREATE :
      return posts;
    default:
      return posts;
  }
}