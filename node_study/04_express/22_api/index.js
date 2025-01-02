const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();  // .env 파일을 로드

///SMS 전송 API 라이브러리
const coolsms = require('coolsms-node-sdk').default;

const app = express();
const port = 5000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Naver SMTP 서버 설정
const transporter = nodemailer.createTransport({
  host: 'smtp.naver.com',
  port: 587, // TLS를 사용할 때
  secure: false, // TLS를 사용하면 false, SSL을 사용하면 true
  auth: {
    user: process.env.EMAIL_USER,  // .env 파일에서 가져옴
    pass: process.env.EMAIL_PASS,  // .env 파일에서 가져옴
  },
});

// 메일 전송 API
app.get('/send-mail', (req, res) => {


  const num = parseInt(Math.random()*100+1  )

  //const { to, subject, text } = req.body;
  const to = "jx007s@nate.com";
  const subject = "express 가 보낸다";
  const text = `내용이지 : ${num}`;

  // 이메일 내용 설정
  const mailOptions = {
    from: process.env.EMAIL_USER,  // 보내는 사람
    to: to,  // 받는 사람
    subject: subject,  // 이메일 제목
    text: text,  // 이메일 본문
  };

  // 이메일 전송
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: 'Error 실패: ' + error.message });
    }
    res.status(200).send({ message: `Email 보내기 성공: ${num}  ` + info.response });
  });
});



// 메인
app.get('/', (req, res) => {
    res.send("메인입니다.");
})


// 서버 시작
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

