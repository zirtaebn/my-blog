"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const api_1 = __importDefault(require("./routes/api"));
dotenv_1.default.config();
const server = (0, express_1.default)();
server.use(api_1.default);
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
server.listen(process.env.PORT, () => console.log('Servidor rodando'));
