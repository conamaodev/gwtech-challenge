"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseUrl_1 = require("../utils/baseUrl");
const filterUsersByCompanyGroup_1 = require("../utils/filterUsersByCompanyGroup");
const formatUsersPosts_1 = require("../utils/formatUsersPosts");
class companyController {
    static async index(req, res) {
        const { company_name } = req.params;
        const { data: users } = await baseUrl_1.default.get('users');
        const usersFiltered = filterUsersByCompanyGroup_1.default(users, company_name);
        const companies = usersFiltered.flatMap(user => user.company);
        return res.send(companies);
    }
    static async getUsers(req, res) {
        const { id, company_name } = req.params;
        let { data: users } = await baseUrl_1.default.get('users');
        if (id) {
            users = users.filter(user => +id === user.id);
        }
        const usersFiltered = filterUsersByCompanyGroup_1.default(users, company_name);
        const { data: posts } = await baseUrl_1.default.get(`posts`);
        const usersPosts = formatUsersPosts_1.default(usersFiltered, posts);
        return res.send(usersPosts);
    }
}
exports.default = companyController;
//# sourceMappingURL=companyController.js.map