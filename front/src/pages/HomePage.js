import React, {useEffect, useState} from "react";
import api from "../services/api";
import Card from "../components/Card/Card";
import Breadcumb from "../components/Breadcumb/Breadcumb";
import BasePage from "../components/BasePage/BasePage";

export default function HomePage() {
    const [companies, setCompanies] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        async function loadCompanies() {
            const {data} = await api.get('companies');

            setCompanies(data);
        }

        loadCompanies();
    }, []);

    useEffect(() => {
        const filterSearch = (text) => companies.filter(company => company.name.toLowerCase().includes(text.toLowerCase()));

        setSearchResults(filterSearch(search));
    }, [companies, search]);

    return (
        <BasePage
            breadcumb={<Breadcumb items={['Home']}/>}
            title="Escolha o Grupo Empresarial"
            search={search}
            setSearch={setSearch}
            cards={
                searchResults.map(company => <Card
                    key={company.name}
                    link={`/company/${company.name}`}
                    title={company.name}
                    content={company.catchPhrase}
                />)
            }
        />
    )
}
