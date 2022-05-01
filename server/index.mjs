import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

// 라우터
import postRoutes from './routes/posts.mjs'
import userRoutes from './routes/users.mjs'

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true})); // 이후 전송할 이미지 파일의 전송 가능 크기를 30메가바이트로 제한. 
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

// 몽고 DB 연결

import {mongoURL} from './config/dev.mjs'
const PORT = process.env.PORT || 5000;

mongoose.connect(mongoURL)
  .then( () => app.listen(PORT, ()=> console.log(`서버가 포트 ${PORT}번에서 실행 중입니다.`)))
  .catch( err => console.log(err.message))

