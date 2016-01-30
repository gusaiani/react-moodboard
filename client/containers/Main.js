import React, {Component, PropTypes} from 'react'

import Header from './Header'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header/>
        {this.props.children}
      </div>
    )
  }
}

export default Main
