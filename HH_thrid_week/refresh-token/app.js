// app.js

import express from "express";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3019;

// 비밀 키는 외부에 노출되면 안되겠죠? 그렇기 때문에, .env 파일을 이용해 비밀 키를 관리해야합니다.
const ACCESS_TOKEN_SECRET_KEY = `HangHae99`; // Access Token의 비밀 키를 정의합니다.
const REFRESH_TOKEN_SECRET_KEY = `Sparta`; // Refresh Token의 비밀 키를 정의합니다.

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  return res.status(200).send("Hello Token!");
});

const tokenStorages = {};

app.post("/tokens", async (req, res, next) => {
  const { id } = req.body;
  const accessToken = createAccessToken(id);
  const refresToken = jwt.sign({ id: id }, REFRESH_TOKEN_SECRET_KEY, {
    expiresIn: "7d",
  });

  tokenStorages[refresToken] = {
    id: id,
    ip: req.ip,
    userAgent: req.headers["user-agent"],
  };
  res.cookie("accessToken", accessToken);
  res.cookie("refreshToken", refresToken);
  return res.status(200).json({ message: " done " });
});

app.get("/tokens/validate", async (req, res) => {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    return res.status(400).json({ errorMessage: " 존재하지 않음" });
  }
  const payload = validateToken(accessToken, ACCESS_TOKEN_SECRET_KEY);
  if (!payload) {
    return res.status(401).json({ errorMessage: "비정상." });
  }
  const { id } = payload;
  return res
    .status(200)
    .json({ message: `${id}의 페이로드를 가진 토큰 정상인증` });
});

function validateToken(token, secretKey) {
  try {
    return jwt.verify(token, secretKey);
  } catch (err) {
    return null;
  }
}

function createAccessToken(id) {
  return jwt.sign({ id }, ACCESS_TOKEN_SECRET_KEY, { expiresIn: "10s" });
}

app.post("/tokens/refresh", async (req, res) => {
  const { refresToken } = req.cookies;
  if (!refresToken) {
    return res.status(400).json({ errorMessage: "존재 안함" });
  }
  const payload = validateToken(refresToken, REFRESH_TOKEN_SECRET_KEY);
  if (!payload) {
    return res.status(401).json({ errorMessage: "비정상" });
  }
  const userInfo = tokenStorages[refresToken];
  if (!userInfo) {
    return res.status(419).json({ errorMessage: "서버 존재 안함." });
  }
  const newAccessToken = createAccessToken(userInfo.id);
  res.cookie("accessToken", newAccessToken);
  return res.status(200).json({ message: "ok" });
});

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});
