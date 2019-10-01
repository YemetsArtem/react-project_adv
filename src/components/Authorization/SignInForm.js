import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';

export class SignInForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        
        return (
            <div className="signIn">
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="email">
                        <label>
                            Email
                            <Field name="email" component="input" type="email" />
                        </label>
                    </div>
                    <div className="password">
                        <label>
                            Password
                            <Field name="password" component="input" type="password" />
                        </label>
                    </div>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: "authorization"
})(SignInForm)
