import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAll, eventListSelector } from '../../ducks/events'

export class EventList extends Component {
    componentDidMount() {
        this.props.fetchAll();
    }

    render() {
        console.log(this.props.events);
        
        return (
            <div>
                
            </div>
        )
    }
}

export default connect(state => ({
    events: eventListSelector(state)
}), { fetchAll })(EventList)
