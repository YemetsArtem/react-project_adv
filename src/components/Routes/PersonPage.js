import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewPersonForm from '../People/NewPersonForm'
import { addUser } from '../../ducks/people'

export class PersonPage extends Component {
    render() {
        return <NewPersonForm onSubmit={this.props.addUser} />
    }
}

export default connect(null, { addUser })(PersonPage)
