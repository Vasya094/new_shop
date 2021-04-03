import React from 'react'
import { connect } from 'react-redux'
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.action'
import { CheckoutItemContainer, ImageContainer, QuantityContainer, RemoveButtonContainer, TextContainer } from './checkout-item.styles'


const CheckoutItem = ( { cartItem,  clearItem, addItem, removeItem} ) => {
  const {name, imageUrl, price, quantity} = cartItem
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item'></img>
      </ImageContainer>
      <TextContainer className="name">{name}</TextContainer>
      <QuantityContainer>
        <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094; </div>
        <span className='value'> {quantity} </span>
        <div className="arrow" onClick={() => addItem(cartItem)}> &#10095;</div>
      </QuantityContainer>
      <TextContainer className="price">{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
} )
//const test = {clearItem: clearItemFromCart, addItem,removeItem}

export default connect(null, mapDispatchToProps)(CheckoutItem)
// export default connect(null, test)(CheckoutItem)
