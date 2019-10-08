import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import ErrorField from '../Common/ErrorField'

export class SignUpForm extends Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="signUp">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <Field name="email" component={ErrorField} type="email" />
                    <Field name="password" component={ErrorField} type="password" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

const validate = ({ email, password }) => {
    const errors = {};

    if (!email) errors.email = "email is required";
    if (!password) errors.password = "password is required";
    else if (password.length < 6) errors.password = "to short";

    return errors;
}

export default reduxForm({
    form: "authorization",
    validate
})(SignUpForm)
