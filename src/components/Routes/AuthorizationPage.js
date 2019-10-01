import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp, moduleName } from '../../ducks/authorization'
import SignInForm from '../Authorization/SignInForm'
import SignUpForm from '../Authorization/SignUpForm'
import Menu from '../Menu'
import MenuItem from '../MenuItem'
import Loader from '../Common/Loader'

class AuthorizationPage extends Component {
    render() {
        const { loading } = this.props;
        
        return (
            <div>
                <Menu menuTitle="Authorization Page">
                    <MenuItem path="/authorization/signin">Sign In</MenuItem>
                    <MenuItem path="/authorization/signup">Sign Up</MenuItem>
                </Menu>
                <Route
                    path="/authorization/signin"
                    render={() => <SignInForm onSubmit={this.handleSignIn} />}
                />
                <Route
                    path="/authorization/signup"
                    render={() => <SignUpForm onSubmit={this.handleSignUp} />}
                />
                {loading && <Loader />}
            </div>
        );
    }

    handleSignIn = values => console.log(values);
    handleSignUp = ({ email, password }) => this.props.signUp(email, password);   
}

export default connect(state=>({
    loading: state[moduleName].loading
}), { signUp })(AuthorizationPage);
