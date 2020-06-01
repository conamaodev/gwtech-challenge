"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
exports.default = axios_1.default.create({
    baseURL: 'http://jsonplaceholder.typicode.com/',
    timeout: 60000,
    headers: { 'Content-Type': 'application/json' },
});
//# sourceMappingURL=baseUrl.js.map