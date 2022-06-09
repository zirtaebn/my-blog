import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import path from 'path';

import mainRoutes from './routes/api'




dotenv.config();


const server = express();

server.use(mainRoutes);

server.use(express.static(path.join(__dirname, '../public')));


server.listen(process.env.PORT, () => console.log('Servidor rodando')
)

