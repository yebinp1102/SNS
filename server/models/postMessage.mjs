import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title : String,
  message: String,
  creator: String,
  name: String,
  tags: [String], // 태그는 반드시 문자 타입의 데이터를 요소로 갖는 배열
  selectedFile: String,  // 선택된 이미지를 문자열로 바꿀 것이다.
  likes: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const postMessage = mongoose.model('PostMessage', postSchema);

export default postMessage;

