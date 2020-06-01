import React from 'react';
import {Route, Switch} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import CompanyUsersPage from "./pages/CompanyUsersPage";
import UserPage from "./pages/UserPage";

function Routes() {
    return (
        <div>
            <Switch>
                <Route path={"/company/:company_name/:user_id"}>
                    <UserPage />
                </Route>

                <Route path="/company/:company_name">
                    <CompanyUsersPage/>
                </Route>

                <Route path="/">
                    <HomePage/>
                </Route>
            </Switch>
        </div>
    );
}

export default Routes;
