"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (users, company_name) => {
    const usersFiltered = users.filter(user => user.company.name.toLowerCase().includes('group'));
    if (!company_name) {
        return usersFiltered;
    }
    return usersFiltered.filter(user => user.company.name.toLowerCase() === company_name.toLowerCase());
};
//# sourceMappingURL=filterUsersByCompanyGroup.js.map