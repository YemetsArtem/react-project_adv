import React, { Component } from 'react'
import { selectedEventsSelector } from '../../ducks/events'
import { connect } from 'react-redux'
import SelectedEventCard from './SelectedEventCard'

class SelectedEvents extends Component {
    render() {
        return (
            <div className="selected-events">
                {this.props.events.map(
                    event => <SelectedEventCard event={event} key={event.uid} />
                )}
            </div>
        );
    }
}

export default connect(state => ({
    events: selectedEventsSelector(state)
}))(SelectedEvents);
