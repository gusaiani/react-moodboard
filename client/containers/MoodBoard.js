import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {addToCart} from '../actions/cart'
import {seeMore} from '../actions/boardItems'

import BoardItem from '../components/boarditem'
import ItemDetails from '../components/itemDetails'

class MoodBoard extends Component {
  constructor(props) {
    super(props)
    this.setMoodboardClass = this.setMoodboardClass.bind(this)
  }

  setMoodboardClass() {
    const {boardItems} = this.props
    const {seeMoreItem} = boardItems

    if (seeMoreItem) {
      return 'hidden'
    } else {
      return 'visible'
    }
  }

  render() {
    const {boardItems, addToCart, seeMore} = this.props
    const moodboardClassName = this.setMoodboardClass()

    return (
      <div>
        <div className={`moodboard ${moodboardClassName}`}>
          {boardItems.items.map((item) => {
            if (item.container) {
              return renderItemContainer(item, addToCart)
            } else {
              return (<BoardItem item={item} key={item.id} addToCart={addToCart} seeMore={seeMore}/>)
            }
          })}
        </div>

        {(boardItems.seeMoreItem !== null) && <ItemDetails boardItems={boardItems}/>}
      </div>
    )
  }
}

function renderItemContainer(container, addToCart) {
  return (
    <div className="container one-by-two" key={Math.random()}>
      {container.items.map((item) => {
        return (<BoardItem item={item} key={item.id} addToCart={addToCart} seeMore={seeMore}/>)
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
  addToCart,
  seeMore
})(MoodBoard)
