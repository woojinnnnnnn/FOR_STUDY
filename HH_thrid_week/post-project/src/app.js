
import express from 'express';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session'
import UsersRouter from './routes/users.router.js';
import logMiddleware  from './middlewares/log.middleware.js';
import errorHandlingMiddleware from './middlewares/error.handling.middleware.js';
import PostsRouter from './routes/posts.router.js'
import CommentsRouter from './routes/comments.router.js'

const app = express();
const PORT = 3018;

app.use(logMiddleware)
app.use(express.json());
app.use(cookieParser());
app.use(expressSession(
  {
    secret: 'custom_key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
  }
))
app.use('/api', [UsersRouter, PostsRouter, CommentsRouter]);
app.use(errorHandlingMiddleware)

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});
