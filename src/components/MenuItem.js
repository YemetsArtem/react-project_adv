import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class MenuItem extends Component {
  render() {
    const { children, path } = this.props

    return (
      <li>
        <NavLink to={path} activeStyle={{ color: 'red' }}>
          {children}
        </NavLink>
      </li>
    )
  }
}

export default MenuItem
