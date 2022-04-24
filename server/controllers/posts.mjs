// 각 모델 접근 권한
import postMessage from "../models/postMessage.mjs"

export const getPosts = async (req, res) => {
  try{
    const postMessages = await postMessage.find();
    console.log(postMessages)
    res.status(200).json(postMessages);
  }catch(err){
    res.status(404).json({ message: err.message})
  }
}

export const createPost = async (req, res) => {
  const body = req.body;
  const newPost = new postMessage(post);
  try{
    await newPost.save();
    res.status(200).json(newPost)
  }catch(err){
    res.status(404).json({ message: err.message })
  }
}