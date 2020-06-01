"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const path = require("path");
const { NODE_ENV } = process.env;
if (!['prod', 'dev', 'test'].includes(NODE_ENV)) {
    throw new Error(`NODE_ENV is neither set to 'prod' nor to 'dev'`);
}
dotenv_1.config({
    path: path.join(__dirname, '..', 'env', NODE_ENV + '.env'),
});
//# sourceMappingURL=load-env.js.map