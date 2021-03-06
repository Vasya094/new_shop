import React from 'react'
import { connect } from "react-redux";
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { CartContainer, ItemCountContainer, ShoppingIcon } from './cart-item.styles';

const CartIcon = ({toggleCartHidden, itemCount}) => {
  return (
    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  )
}

const mapDispatchToProps = dispatch => ( {
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state =>( {
  itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)


