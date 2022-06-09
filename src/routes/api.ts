import express, { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { Posts } from '../models/posts';


const router = Router();


router.get('/all', (req: Request, res: Response) => {

    res.json(JSON.stringify(Posts.getAll()))

})

router.post('/new', bodyParser.json(), (req: Request, res: Response) => {

   
    let title = req.body.title;
    let description = req.body.description;

    Posts.newPost(title, description)

    res.send('Post adicionado');

})

export default router;