import React, { Component } from 'react';
import PeopleList from "../People/PeopleList"

class AdminPage extends Component {
    render() {
        return (
            <div>
                <h1>Admin Page</h1>
                <PeopleList />
            </div>
        );
    }
}

export default AdminPage;
