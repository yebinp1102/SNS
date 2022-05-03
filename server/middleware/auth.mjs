import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
  try{
    // 로그인이나 회원가입을 마친 유저는 token을 갖는다. 이 유저가 어플리케이션의 어떤 기능을 사용하고자 할 때 그의 토큰이 valid한지 확인
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500; // 구글로 로그인 한 경우에는 tokne의 length가 500이 넘는다.
    let decodedData;  // 토근에서 얻으려는 데이터.

    // 토큰이 존재하고 구글로 로그인 한 것이 아닐 경우, 유저 데이터를 받아오는 방법
    if(token && isCustomAuth){
      decodedData = jwt.verify(token, 'test');
      req.userId = decodedData?.id;
    }else{  // 구글로 로그인한 경우, 유저 데이터를 받아오는 방법
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub; // sub은 구글 인증이 제공하는 각 유저의 id를 상징
    }
    next();
  }catch(err){
    console.log(err)
  }
}

export default auth;