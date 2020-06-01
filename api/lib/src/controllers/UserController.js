"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseUrl_1 = require("../utils/baseUrl");
const formatUsersPosts_1 = require("../utils/formatUsersPosts");
const filterUsersByCompanyGroup_1 = require("../utils/filterUsersByCompanyGroup");
class userController {
    static async index(req, res) {
        const { id } = req.params;
        let { data: users } = await baseUrl_1.default.get('users');
        if (id) {
            users = users.filter(user => +id === user.id);
        }
        const usersFiltered = filterUsersByCompanyGroup_1.default(users);
        const { data: posts } = await baseUrl_1.default.get(`posts`);
        const UsersPosts = formatUsersPosts_1.default(usersFiltered, posts);
        return res.send(UsersPosts);
    }
}
exports.default = userController;
//# sourceMappingURL=userController.js.map