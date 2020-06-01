import baseUrl from '../utils/baseUrl';
import UserInterface from '../interfaces/UserInterface';
import filterUsersByCompanyGroup from '../utils/filterUsersByCompanyGroup';
import CompanyInterface from '../interfaces/CompanyInterface';
import PostInterface from '../interfaces/PostInterface';
import formatUsersPosts from '../utils/formatUsersPosts';

export default class companyController {
    static async index(req, res) {
        const { company_name } = req.params;

        const { data: users } = await baseUrl.get<UserInterface[]>('users');
        const usersFiltered = filterUsersByCompanyGroup(users, company_name);

        const companies = usersFiltered.flatMap<CompanyInterface>(user => user.company);

        return res.send(companies);
    }

    static async getUsers(req, res) {
        const { id, company_name } = req.params;

        let { data: users } = await baseUrl.get<UserInterface[]>('users');

        if (id) {
            users = users.filter(user => +id === user.id)
        }

        const usersFiltered = filterUsersByCompanyGroup(users, company_name);

        const { data: posts } = await baseUrl.get<PostInterface[]>(`posts`);

        const usersPosts = formatUsersPosts(usersFiltered, posts);

        return res.send(usersPosts);
    }
}
