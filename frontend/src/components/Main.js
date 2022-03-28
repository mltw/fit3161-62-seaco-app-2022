import React, { Component } from 'react'
import { connect } from 'react-redux';

class Main extends Component {
  render() {
      const {
          username
      } = this.props

        return (
        <h1>HELLO {username}</h1>
        )
  }
}

export default connect(state => ({
    // props
    username: state.userValidation.username,
}), {
    // actions
    // validateUser
})(Main);