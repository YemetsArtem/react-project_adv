import React, { Component } from 'react'

export class ErrorField extends Component {
    render() {
        const {input, type, meta:{error, touched}} = this.props;
        const errorText = touched && error && <div style={{color:"red"}}>{error}</div>

        return (
            <div className={type}>
                <label>
                    {input.name}
                    <input {...input} type={type}/>
                    {errorText}
                </label>
            </div>
        )
    }
}

export default ErrorField
