import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {addToCart} from '../actions/cart'

import BoardItem from '../components/boarditem'

class MoodBoard extends Component {
  constructor(props) {
    super(props)
    this.renderItemContainer = this.renderItemContainer.bind(this)
  }

  render() {
    const {products, boardItems, addToCart, showDetails, hideDetails} = this.props

    return (
      <div>
        <div className="moodboard">
          {boardItems.items.map((item) => {
            if (item.container) {
              return this.renderItemContainer(item)
            } else {
              return (
                <BoardItem
                  item={products[item]}
                  key={item}
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
    const {boardItems, addToCart, showDetails, hideDetails, products} = this.props

    return (
      <div className="container one-by-two" key={Math.random()}>
        {container.items.map((item) => {
          return (
            <BoardItem
              item={products[item]}
              key={item}
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
  const {boardItems, products} = state
  return {
    products,
    boardItems
  }
}

export default connect(mapStateToProps, {
  addToCart
})(MoodBoard)
