import React, {Component, PropTypes} from 'react'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <h1>Awesome Title</h1>
          <div>
            <button>Bag All!</button>
            Total Cost: $0.00
          </div>
        </div>

        <div>
          Logo
        </div>
      </div>
    )
  }
}

export default Header
