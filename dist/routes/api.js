"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const posts_1 = require("../models/posts");
const router = (0, express_1.Router)();
router.get('/all', (req, res) => {
    res.json(JSON.stringify(posts_1.Posts.getAll()));
});
router.post('/new', body_parser_1.default.json(), (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    posts_1.Posts.newPost(title, description);
    res.send('Post adicionado');
});
exports.default = router;
