import React, { Component } from 'react'
import {connect} from 'react-redux'
import {peopleListSelector, fetchAllPeople} from '../../ducks/people'
import {Table, Column} from 'react-virtualized'

export class PeopleTable extends Component {
    componentDidMount() {
        this.props.fetchAllPeople && this.props.fetchAllPeople()
    }

    render() {
        if (!this.props.people.length) return null
        return (      
            <Table
                width={500}
                height={200}
                rowHeight={40}
                headerHeight={50}
                rowGetter={this.rowGetter}
                rowCount={this.props.people.length}
                overscanRowCount={2}
                ref={this.setListRef}
            >
                <Column
                    label="First Name"
                    dataKey="firstName"
                    width={150}
                />
                <Column
                    label="Last Name"
                    dataKey="lastName"
                    width={150}
                />
                <Column
                    label="Email"
                    dataKey="email"
                    width={300}
                />
            </Table>  
        )
    }

    rowGetter = ({ index }) => this.props.people[index]
}

export default connect(state => ({
    people: peopleListSelector(state)
}), {fetchAllPeople})(PeopleTable)