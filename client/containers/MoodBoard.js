import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {addToCart} from '../actions/cart'
import BoardItem from '../components/boarditem'

class MoodBoard extends Component {
  render() {
    const {boardItems, addToCart} = this.props

    return (
      <div className="moodboard">
        {boardItems.items.map((item) => {
          if (item.container) {
            return renderItemContainer(item, addToCart)
          } else {
            return (<BoardItem item={item} key={item.id} addToCart={addToCart}/>)
          }
        })}
      </div>
    )
  }
}

function renderItemContainer(container, addToCart) {
  return (
    <div className="container one-by-two">
      {container.items.map((item) => {
        return (<BoardItem item={item} key={item.id} addToCart={addToCart}/>)
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

export default connect(mapStateToProps, {
  addToCart
})(MoodBoard)
