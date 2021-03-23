import React from 'react'
import './cart-icon.styles.scss'
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartIcon = ({toggleCartHidden, itemCount}) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ( {
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({cart: {cartItems}}) =>( {
  itemCount: cartItems.reduce((cul, curr) => curr.quantity + cul, 0)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)


