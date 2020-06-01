import filterUsersByCompanyGroup from '../../utils/filterUsersByCompanyGroup';
import { users, usersWithoutCompanyGroup, posts } from '../mocks';
import formatUsersPosts from '../../utils/formatUsersPosts';

describe('Test the filterUsersByCompanyGroup', () => {
    it('should receive a list of users and return only users works for a company group', () => {
        const usersFiltered = filterUsersByCompanyGroup(users);

        expect(usersFiltered).toHaveLength(2);
        expect(usersFiltered).toStrictEqual([
            {
                id: 7,
                name: 'Kurtis Weissnat',
                username: 'Elwyn.Skiles',
                email: 'Telly.Hoeger@billy.biz',
                address: {
                    street: 'Rex Trail',
                    suite: 'Suite 280',
                    city: 'Howemouth',
                    zipcode: '58804-1099',
                    geo: {
                        lat: '24.8918',
                        lng: '21.8984',
                    },
                },
                phone: '210.067.6132',
                website: 'elvis.io',
                company: {
                    name: 'Johns Group',
                    catchPhrase: 'Configurable multimedia task-force',
                    bs: 'generate enterprise e-tailers',
                },
            },
            {
                id: 8,
                name: 'Nicholas Runolfsdottir V',
                username: 'Maxime_Nienow',
                email: 'Sherwood@rosamond.me',
                address: {
                    street: 'Ellsworth Summit',
                    suite: 'Suite 729',
                    city: 'Aliyaview',
                    zipcode: '45169',
                    geo: {
                        lat: '-14.3990',
                        lng: '-120.7677',
                    },
                },
                phone: '586.493.6943 x140',
                website: 'jacynthe.com',
                company: {
                    name: 'Abernathy Group',
                    catchPhrase: 'Implemented secondary concept',
                    bs: 'e-enable extensible e-tailers',
                },
            },
        ]);
    });

    it('should receive a list of users and return void array because no have a company group', () => {
        const usersFiltered = filterUsersByCompanyGroup(usersWithoutCompanyGroup);

        expect(usersFiltered).toHaveLength(0);
        expect(usersFiltered).toStrictEqual([]);
    });

    it(
        'should receive a list of users and a company name and return only users work for the company received ' +
            'if the company participates a company group',
        () => {
            const company_name = 'Johns Group';

            const usersFiltered = filterUsersByCompanyGroup(users, company_name);

            expect(usersFiltered).toHaveLength(1);
            expect(usersFiltered).toStrictEqual([
                {
                    id: 7,
                    name: 'Kurtis Weissnat',
                    username: 'Elwyn.Skiles',
                    email: 'Telly.Hoeger@billy.biz',
                    address: {
                        street: 'Rex Trail',
                        suite: 'Suite 280',
                        city: 'Howemouth',
                        zipcode: '58804-1099',
                        geo: {
                            lat: '24.8918',
                            lng: '21.8984',
                        },
                    },
                    phone: '210.067.6132',
                    website: 'elvis.io',
                    company: {
                        name: 'Johns Group',
                        catchPhrase: 'Configurable multimedia task-force',
                        bs: 'generate enterprise e-tailers',
                    },
                },
            ]);
        },
    );

    it(
        'should receive a list of users and a company name and return void array because ' +
            'the company no participates of a company group',
        () => {
            const company_name = 'Romaguera-Crona';

            const usersFiltered = filterUsersByCompanyGroup(users, company_name);

            expect(usersFiltered).toHaveLength(0);
            expect(usersFiltered).toStrictEqual([]);
        },
    );
});

describe('Test the formatUsersPosts', () => {
    it('should receive a list of users and posts and return user posts', () => {
        const usersPosts = formatUsersPosts(users, posts);

        expect(usersPosts).toHaveLength(3);
        expect(usersPosts).toStrictEqual([
            {
                id: 1,
                name: 'Leanne Graham',
                company: 'Romaguera-Crona',
                posts: [],
            },
            {
                id: 7,
                name: 'Kurtis Weissnat',
                company: 'Johns Group',
                posts: [
                    {
                        id: 61,
                        userId: 7,
                        title: 'voluptatem doloribus consectetur est ut ducimus',
                        body:
                            'ab nemo optio odio delectus tenetur corporis similique nobis repellendus rerum omnis facilis vero blanditiis debitis in nesciunt doloribus dicta dolores magnam minus velit',
                    },
                ],
            },
            {
                id: 8,
                name: 'Nicholas Runolfsdottir V',
                company: 'Abernathy Group',
                posts: [
                    {
                        id: 74,
                        userId: 8,
                        title: 'enim unde ratione doloribus quas enim ut sit sapiente',
                        body:
                            'odit qui et et necessitatibus sint veniam mollitia amet doloremque molestiae commodi similique magnam et quam blanditiis est itaque quo et tenetur ratione occaecati molestiae tempora',
                    },
                ],
            },
        ]);
    });
});
