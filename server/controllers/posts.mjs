import express from 'express'
import mongoose from 'mongoose';

const router = express.Router();
// 각 모델 접근 권한
import postMessage from "../models/postMessage.mjs"

export const getPosts = async (req, res) => {
  try{
    const postMessages = await postMessage.find();
    res.status(200).json(postMessages);
  }catch(err){
    res.status(404).json({ message: err.message})
  }
}

export const createPost = async (req, res) => {
  const { title, message, selectedFile, creator, tags } = req.body;
  const newPost = new postMessage({ title, message, selectedFile, creator, tags })
  try{
    await newPost.save();
    res.status(200).json(newPost)
  }catch(err){
    res.status(409).json({ message: err.message })
  }
}