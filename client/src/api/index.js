import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' });

// 모든 요청을 할 때 마다 호출 되는 미들웨어
API.interceptors.request.use((req) => {
  if(localStorage.getItem('profile')){
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
  }
  return req
})

// post
export const fetchPosts = (page) => API.get(`/posts?page=${page}`)
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none' }&tags=${searchQuery.tags}`)
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`posts/${id}/likePost`)
export const updatePost = (id, updatedPost) => API.patch(`posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`posts/${id}`);
// auth
export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp = (formData) => API.post('/user/signup', formData) 