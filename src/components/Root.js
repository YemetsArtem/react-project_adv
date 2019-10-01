import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import AdminPage from './Routes/AdminPage'
import AuthorizationPage from './Routes/AuthorizationPage'
import Menu from './Menu'
import MenuItem from './MenuItem'
import ProtectedRoute from './Common/ProtectedRoute'

class Root extends Component {
    render() {
        return (
            <React.Fragment>
                <Menu>
                    <MenuItem path="/admin">Admin</MenuItem>
                    <MenuItem path="/authorization">Authorization</MenuItem>
                </Menu>
                <Switch>
                    <Redirect from="/" to="/authorization" exact />
                    <ProtectedRoute path="/admin" component={AdminPage} />
                    <Route path="/authorization" component={AuthorizationPage} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Root;
