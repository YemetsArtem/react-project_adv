import React, { Component } from 'react'

export class Menu extends Component {
    static defaultProps = {
        menuTitle: 'Main Menu'
    }

    render() {
        const { menuTitle } = this.props;
        
        return (
            <nav>
                <h1>{menuTitle}</h1>
                <ul style={{listStyleType:"none"}}>{this.props.children}</ul>
            </nav>
        )
    }
}

export default Menu
