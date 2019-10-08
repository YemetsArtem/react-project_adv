import React, { Component } from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import AdminPage from './Routes/AdminPage'
import PersonPage from './Routes/PersonPage'
import AuthorizationPage from './Routes/AuthorizationPage'
import EventsPage from './Routes/EventsPage'
import Menu from './Menu'
import MenuItem from './MenuItem'
import ProtectedRoute from './Common/ProtectedRoute'
import { connect } from 'react-redux'
import { moduleName, signOut } from '../ducks/authorization'

class Root extends Component {
    render() {
        const { signOut, signedIn } = this.props;
        const btn = signedIn
            ? <button onClick={signOut}>Sign out</button>
            : <Link to="/authorization/signin">Sign in</Link>

        return (
            <React.Fragment>
                {btn}
                <Menu>
                    <MenuItem path="/admin">Admin</MenuItem>
                    <MenuItem path="/authorization">Authorization</MenuItem>
                    <MenuItem path="/people">People</MenuItem>
                    <MenuItem path="/events">Events</MenuItem>
                </Menu>
                <Switch>
                    <Redirect from="/" to="/authorization" exact />
                    <ProtectedRoute path="/admin" component={AdminPage} />
                    <ProtectedRoute path="/people" component={PersonPage} />
                    <Route path="/events" component={EventsPage} />
                    <Route path="/authorization" component={AuthorizationPage} />           
                </Switch>
            </React.Fragment>
        );
    }
}

export default connect(state => ({
    signedIn: !!state[moduleName].user
}), { signOut })(Root);
