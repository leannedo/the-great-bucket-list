import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import path from 'path';
import { server as apolloServer } from './graphql';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*const publicPath = path.resolve(__dirname, '../../client/dist');

app.use(express.static(publicPath));
app.get('*', (_req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});*/

apolloServer.applyMiddleware({ app, path: '/graphql' });

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`),
);
