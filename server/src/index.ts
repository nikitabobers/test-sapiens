import express, { Application } from 'express';
const app: Application = express();

import router from './routes';

const PORT = process.env.PORT || 5000;

app.use(router);

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
