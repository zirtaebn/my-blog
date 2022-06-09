"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
const uuid_1 = require("uuid");
const data = [
    {
        id: 'ojfojosd',
        title: 'teste',
        description: 'descricção'
    }
];
exports.Posts = {
    getAll: () => data,
    newPost: (title, description) => {
        data.push({ id: (0, uuid_1.v4)(), title, description });
    }
};
