"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const companyController_1 = require("./controllers/companyController");
const routes = express_1.Router();
routes.get('/', (req, res) => res.send('Welcome to the growth challenge api!'));
routes.get('/companies/:company_name?', companyController_1.default.index);
routes.get('/companies/:company_name/users/:id?', companyController_1.default.getUsers);
exports.default = routes;
//# sourceMappingURL=routes.js.map