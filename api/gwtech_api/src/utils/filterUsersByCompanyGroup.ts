import UserInterface from "../interfaces/UserInterface";

export default (users: UserInterface[], company_name?: string): UserInterface[] => {
    const usersFiltered = users.filter(user => user.company.name.toLowerCase().includes('group'));

    if (!company_name) {
        return usersFiltered
    }

    return usersFiltered.filter(user => user.company.name.toLowerCase() === company_name.toLowerCase())
}