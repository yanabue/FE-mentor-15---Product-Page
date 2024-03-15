/* eslint-disable react/prop-types */


export default function CartItem(props){
    return (
        <div className="cart-item">
            <img className="cart-item-img" src="images\image-product-1-thumbnail.jpg" alt="cart item thumbnail" />
            <div className="cart-item-description">
                <p className="cart-item-title">{props.itemTitle}</p>
                <p className="price">{props.itemPrice} x {props.itemQuantity} <span className="item-total-price">{props.itemTotalPrice}</span></p>
            </div>
            <button className="delete-item">
                <img src="images\icon-delete.svg" alt="delete icon" className="trash-btn" />
            </button>
        </div>
    )
}