import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import ErrorField from '../Common/ErrorField'

export class NewPersonForm extends Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="user-form">
                <h2>Add new person</h2>
                <form onSubmit={handleSubmit}>
                    <Field name="firstName" component={ErrorField} type="text" />
                    <Field name="lastName" component={ErrorField} type="text" />
                    <Field name="email" component={ErrorField} type="email" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

const validate = ({ firstName, email }) => {
    const errors = {};

    if (!email) errors.email = "email is required";
    if (!firstName) errors.firstName = "firstName is required";

    return errors;
}

export default reduxForm({
    form: 'people',
    validate
})(NewPersonForm)
