import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {addToCart} from '../actions/cart'
import {showDetails, hideDetails} from '../actions/boardItems'

import BoardItem from '../components/boarditem'

class MoodBoard extends Component {
  constructor(props) {
    super(props)
    this.renderItemContainer = this.renderItemContainer.bind(this)
  }

  render() {
    const {boardItems, addToCart, showDetails, hideDetails} = this.props

    return (
      <div>
        <div className="moodboard">
          {boardItems.items.map((item) => {
            if (item.container) {
              return this.renderItemContainer(item)
            } else {
              return (
                <BoardItem
                  item={item}
                  key={item.id}
                  addToCart={addToCart}
                  showDetails={showDetails}
                  hideDetails={hideDetails}
                  itemToDisplayDetails={boardItems.seeMoreItem}/>
              )
            }
          })}
        </div>
      </div>
    )
  }

  renderItemContainer(container) {
    const {boardItems, addToCart, showDetails, hideDetails} = this.props

    return (
      <div className="container one-by-two" key={Math.random()}>
        {container.items.map((item) => {
          return (
            <BoardItem
              item={item}
              key={item.id}
              addToCart={addToCart}
              showDetails={showDetails}
              hideDetails={hideDetails}
              itemToDisplayDetails={boardItems.seeMoreItem}/>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {boardItems} = state
  return {
    boardItems
  }
}

export default connect(mapStateToProps, {
  addToCart,
  showDetails,
  hideDetails
})(MoodBoard)
