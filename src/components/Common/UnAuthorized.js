import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class UnAuthorized extends Component {
    render() {
        return (
            <div>
                <h1>
                    Unauthorized, please <Link to="/authorization/signin">Sign In</Link>
                </h1>
            </div>
        )
    }
}

export default UnAuthorized
