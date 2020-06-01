import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import api from "../services/api";
import Card from "../components/Card/Card";
import Breadcumb from "../components/Breadcumb/Breadcumb";
import BasePage from "../components/BasePage/BasePage";

export default function UserPage() {
    const {company_name, user_id} = useParams();
    const [user, setUser] = useState({});
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        async function loadUser() {
            const url = user_id ? `companies/${company_name}/users/${user_id}` : `companies/${company_name}/users`;
            const {data} = await api.get(url);
            const [user] = data;

            setUser(user);
        }
        
        loadUser();
    }, [company_name, user_id]);

    useEffect(() => {
        const filterSearch = (text) => user.posts?.filter(post => post.title.toLowerCase().includes(text.toLowerCase()));

        setSearchResults(filterSearch(search));
    }, [user, search]);

    return (
        <BasePage
            breadcumb={<Breadcumb items={['Home', company_name, user.name]} links={['/', `/company/${company_name}`]}/>}
            title="Posts"
            search={search}
            setSearch={setSearch}
            cardsLarge={true}
            cards={searchResults?.map(post => <Card
                key={post.title}
                title={post.title}
                content={post.body}
            />)}
        />
    )
}