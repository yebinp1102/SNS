import express from 'express'
import mongoose from 'mongoose';

const router = express.Router();
// 각 모델 접근 권한
import postMessage from "../models/postMessage.mjs"

export const getPosts = async (req, res) => {
  try{
    const post = await postMessage.find();
    res.status(200).json(post);
  }catch(err){
    res.status(404).json({ message: err.message})
  }
}
// 쿼리 : /posts?page=1  ->  page 변수가 1임
// PARAMs = > /posts/:id -> :id 자리에 사용자가 원하는 값을 넣을 수 있다.
export const getPostsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query
  try{
    const title = new RegExp(searchQuery, 'i') // test TEST Test를 모두 같은 것으로 인식한다.
    const posts = await postMessage.find({ $or: [ {title}, {tags: { $in: tags.split(',') }}] }) // $or은 내용인지 제목인지 상관 없이 일치하는 단어를 찾는다.
    res.json({ data: posts })
  }catch(err){
    res.status(404).json({ message: err.message })
  }
}

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new postMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() })
  try{
    await newPost.save();
    res.status(200).json(newPost)
  }catch(err){
    res.status(409).json({ message: err.message })
  }
}

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('해당 포스트는 존하지 않습니다.')
  const updatePost = await postMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
  res.json(updatePost);
}

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('해당 포스트는 존하지 않습니다.')
  await postMessage.findByIdAndRemove(id);
  res.json({ message: '글이 성공적으로 삭제 되었습니다.'})
}

export const likePost = async (req, res) => {
  const { id } = req.params;
  // 유저가 인증(로그인)을 완료했는지 확인
  if(!req.userId) return res.json({ message: '해당 기능을 사용할 수 없는 유저입니다.'})
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('해당 포스트는 존하지 않습니다.')
  const post = await postMessage.findById(id);
  // 어떤 유저가 특정 게시글에 이미 좋아요를 눌렀는지 확인. 안눌렀으면 -1 반환.
  const index = post.likes.findIndex((id) => id === String(req.userId));
  if(index === -1){
    // 좋아요를 누르지 않은 경우엔, likes 배열에 유저의 아이디를 push
    post.likes.push(req.userId)
  }else{
    // 좋아요를 이미 누른 경우라면 좋아요 기능을 취소할 수 있게 likes 배열에서 해당 유저 아이디를 제거한다.
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }
  const updatedPost = await postMessage.findByIdAndUpdate(id, post, { new: true });
  res.json(updatedPost)
}