/* eslint-disable react/prop-types */
import CartItem from "../buy-components/CartItem"

export default function ShoppingCart(props){
  
    function cartItems(){
        return props.cartContent.map(cartItem => {
            return (
                <>
                <CartItem 
                    key={cartItem.key}
                    itemTitle={cartItem.title}
                    itemPrice={cartItem.price}
                    itemQuantity={cartItem.quantity}
                    itemTotalPrice={(cartItem.quantity * cartItem.price).toFixed(2)}
                    />
                </>)
        })
      
    }

    return (
        <>
        
        <div className="cart-content" style={{display: props.isOpen}}>
            <div className="cart-title-div">
                <p className="cart-title">Cart</p>
            </div>
            <div className="cart-items">
                {cartItems()}
                <button className="checkout buy-btn">Checkout</button>
            </div>
        </div>
        </>
    )
}
