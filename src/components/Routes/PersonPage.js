import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPerson, moduleName } from '../../ducks/people'
import NewPersonForm from '../People/NewPersonForm'
import PeopleList from '../People/PeopleTable'
import Loader from '../Common/Loader'

export class PersonPage extends Component {
    render() {
        const {loading, addPerson} = this.props;

        return (
            <React.Fragment>
                <PeopleList />
                {loading
                    ? <Loader />
                    : <NewPersonForm onSubmit={addPerson} />
                }
            </React.Fragment>    
        )
    }
}

export default connect(state => ({
    loading: state[moduleName].loading
}), { addPerson })(PersonPage)
