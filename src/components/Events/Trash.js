import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import { deleteEvent, stateSelector } from '../../ducks/events'
import Loader from '../Common/Loader'

export class Trash extends Component {
    render() {
        const {connectDropTarget, canDrop, hovered, loading} = this.props;

        const dropStyle = {
            border: `1px solid ${ canDrop ? "red" : "gray"}`,
            backgroundColor: hovered ? "red" : "white",
        };

        return connectDropTarget(
            <div style={{  
                textAlign:"center",            
                float:"right",
                padding:"20px", 
                ...dropStyle
            }}>
                Trash
                {loading && <Loader/>}
            </div>
        )
    }
}

const spec = {
    drop(props, monitor) {
        const eventUid = monitor.getItem().uid;
        props.deleteEvent(eventUid)
    }
}

const collect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    hovered: monitor.isOver()
})


export default connect(state => ({
    loading: stateSelector(state).loading
}), {deleteEvent})(DropTarget('event', spec, collect)(Trash))
