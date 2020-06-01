"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (users, posts) => {
    return users.map(user => {
        const userPosts = posts.filter(post => post.userId === user.id);
        return {
            id: user.id,
            name: user.name,
            company: user.company.name,
            posts: userPosts,
        };
    });
};
//# sourceMappingURL=formatUsersPosts.js.map