import React, { Component } from 'react'
import EventList from '../Events/EventList'

class EventsPage extends Component {
    render() {
        return (
            <div>
                <h1>Events page</h1>
                <EventList />
            </div>
        )
    }
}

export default EventsPage