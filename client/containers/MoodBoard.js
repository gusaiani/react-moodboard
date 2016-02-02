import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import BoardItem from '../components/boarditem'

class MoodBoard extends Component {
  render() {
    const {boardItems} = this.props

    return (
      <div className="moodboard">
        {boardItems.items.map((item) => {
          if (item.container) {
            return renderItemContainer(item)
          } else {
            return (<BoardItem item={item} key={item.name}/>)
          }
        })}
      </div>
    )
  }
}

function renderItemContainer(container) {
  return (
    <div className="container one-by-two">
      {container.items.map((item) => {
        return (<BoardItem item={item} key={item.name}/>)
      })}
    </div>
  )
}

function mapStateToProps(state) {
  const {boardItems} = state
  return {
    boardItems
  }
}

export default connect(mapStateToProps, {})(MoodBoard)
