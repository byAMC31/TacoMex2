"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
//import exphbs from 'express-handlebars';
class Application {
    constructor() {
        this.app = (0, express_1.default)();
    }
    settings() {
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
    }
    routes() {
    }
    start() {
        this.app.listen(3000, () => {
            console.log('server running');
        });
    }
}
exports.default = Application;
