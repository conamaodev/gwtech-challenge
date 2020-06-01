import * as express from 'express';
import * as cors from 'cors';
import routes from './src/routes';

const app = express();

app.use(cors({ origin: process.env.ORIGIN || '*' }));
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.info(`App listening on port ${port}`);
});
