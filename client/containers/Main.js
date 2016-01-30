import React, {Component, PropTypes} from 'react'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main
