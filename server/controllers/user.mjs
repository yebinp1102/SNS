import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from '../models/user.mjs'

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try{
    // 이메일을 통해 유저가 존재하는 지 확인
    const exsitingUser = await User.findOne({ email })
    if(!exsitingUser) return res.status(404).json({ message: "유저가 존재하지 않습니다. "})
    // 이메일이 DB에 존재한다면, 비밀번호가 일치하는지 확인
    const isPasswordCorrect = await bcrypt.compare(password, exsitingUser.password)
    if(!isPasswordCorrect) return res.status(400).json({ message: "비밀번호가 일치하지 않습니다. "})
    // 유저 이메일도 존재하고 비밀번호도 일치하는 경우, jwt로  그 유저의 토큰 생성해서 클라이언트에게 보내줌
    const token = jwt.sign({ email: exsitingUser.email, id: exsitingUser._id}, 'test', { expiresIn: "1h" })
    res.status(200).json({ result: exsitingUser, token })
  }catch(err){
    res.status(500).json({ message: '로그인에 실패 했습니다. '})
  }
}

export const signup = async (req, res) => {
  const {email, password, username, confirmPassword} = req.body;
  try{
    // 이미 해당 이메일을 사용 중인 유저가 있는지 확인
    const exsitingUser = await User.findOne({ email })
    if(exsitingUser) return res.status(400).json({ message: "이미 사용중인 이메일 입니다. "})
    // 비밀번호와 비밀번호 확인란에 입력한 문자가 같은지 확인
    if(password !== confirmPassword) return res.status(400).json({ message: "비밀번호가 일치하지 않습니다. 다시 시도해주세요 "})
    // 이메일도 새것이고, 비번도 일치한다면 비밀번호 암호화해서 DB에 저장
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await User.create({ email, password: hashedPassword, username})
    const token = jwt.sign({ email: result.email, id: result._id}, 'test', { expiresIn: "1h" })
    res.status(200).json({ result, token })
  }catch(err){
    res.status(500).json({ message: '회원가입에 실패 했습니다. '})
  }
}