import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import api from "../services/api";
import Card from "../components/Card/Card";
import Breadcumb from "../components/Breadcumb/Breadcumb";
import BasePage from "../components/BasePage/BasePage";

export default function CompanyUsersPage() {
    const {company_name} = useParams();
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const {data} = await api.get(`companies/${company_name}/users`);

            setUsers(data);
        }
        
        loadUsers();
    }, [company_name]);

    useEffect(() => {
        const filterSearch = (text) => users.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));

        setSearchResults(filterSearch(search));
    }, [users, search]);

    return (
        <BasePage
            breadcumb={<Breadcumb items={['Home', company_name]} links={['/']}/>}
            title="Escolha o Funcionário"
            search={search}
            setSearch={setSearch}
            cards={searchResults.map(user => <Card
                key={user.name}
                link={`/company/${company_name}/${user.id}`}
                title={user.name}
                image={'https://s3.amazonaws.com/37assets/svn/765-default-avatar.png'}
            />)}
        />
    )
}