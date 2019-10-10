import React, { Component } from 'react';

class SelectedEventCard extends Component {
  render() {
    const {title, where, when} = this.props.event;
    
    return ( 
      <React.Fragment>
        <h3>{title}</h3>
        <p>{where}, {when}</p>
      </React.Fragment>
    );
  }
}

export default SelectedEventCard;
