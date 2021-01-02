import express from 'express';
import { json } from 'body-parser';
import { currentUserRouter } from './Routes/current-user';
import { signinRouter } from './Routes/signin'
import { signoutRouter } from './Routes/signout'
import { signupRouter } from './Routes/signup'

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
