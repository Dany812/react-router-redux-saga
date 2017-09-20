import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NotFound extends Component {
  render() {
    return (
      <div className='container'>
            Page not found. <Link to='/'>Home</Link>
      </div>
    )
  }
}

 