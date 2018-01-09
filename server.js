import express from 'express';
import apiRouter from './api';
import config, { nodeEnv, logStarts } from './config';



console.log(config, nodeEnv);
logStarts('function');
const server = express();

server.get('/', (req, res) => {
    res.sendfile('./public/index.html');
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('express listening on port', config.port);
});