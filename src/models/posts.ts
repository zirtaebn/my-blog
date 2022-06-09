import { v4 as uuidv4 } from 'uuid';

type Post = {

    id: string,
    title:string,
    description: string
}

const data: Post[] = [];


export const Posts= {

    getAll: () => data,

    newPost: (title: string, description: string) => {

        data.push({id: uuidv4(), title, description});
    }
}