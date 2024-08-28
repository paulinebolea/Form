import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

import router from './app/router.js';

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views/');

app.use(express.static('./public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
})