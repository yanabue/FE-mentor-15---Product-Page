/* eslint-disable react/prop-types */
import CartItem from "../buy-components/CartItem"

export default function ShoppingCart(props){

    function cartItems(){
        return props.cartContent.map(cartItem => {
            if (props.cartContent.length > 0){
            return (
                <>
                <CartItem 
                    key={cartItem.id}
                    id={cartItem.id}
                    itemTitle={cartItem.title}
                    itemPrice={cartItem.price}
                    itemQuantity={cartItem.quantity}
                    itemTotalPrice={(cartItem.quantity * cartItem.price).toFixed(2)}
                    deleteItem={props.deleteItem.bind(cartItem.id)}
                    />
                </>)
        }})
    }

    return (
        <>
        <div className="cart-content" style={{display: props.isOpen}}>
            <div className="cart-title-div">
                <p className="cart-title">Cart</p>
            </div>
            <div className="cart-items">
                {props.cartContent.length !== 0 ? 
                <>
                    {cartItems()}
                    <button className="checkout buy-btn">Checkout</button>
                </>
                : <p className="cart-empty-p">Your cart is empty!</p>}    
            </div>
        </div>
        </>
    )
}
