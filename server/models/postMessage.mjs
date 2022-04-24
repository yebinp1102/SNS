import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title : String,
  message: String,
  creator: String,
  tags: [String], // 태그는 반드시 문자열로 이루어진 배열
  selectedFile: String,  // 선택된 이미지를 문자열로 바꿀 것이다.
  likeCount: {
    type: Number,
    default: 0
  },
  createAt: {
    type: Date,
    default: new Date()
  }
});

const postMessage = mongoose.model('PostMessage', postSchema);

export default postMessage;

