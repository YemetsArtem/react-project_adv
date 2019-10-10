import React, { Component } from 'react'
import PeopleList from "../People/PeopleList"
import EventTable from '../Events/VirtualizedEventList'
import SelectedEvents from '../Events/SelectedEvents'


class AdminPage extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Admin Page</h1>
                <PeopleList />
                <SelectedEvents />
                <EventTable />
            </React.Fragment>
        );
    }
}

export default AdminPage;
