/* eslint-disable react/prop-types */
import Counter from './buy-components/Counter'
import BuyButton from './buy-components/BuyButton'

export default function Description(props){


    return (
        <div className="description">
            <div className="titles">
                <p className="company">SNEAKER COMPANY</p>
                <h1 className="prod-name">Fall Limited Edition Sneakers</h1>
            </div>    
            <p className="prod-description">
                These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="price">
                <h2 className="cur-price">$125.00<span className="disc-percent">50%</span></h2>
                <p className="prev-price">$250.00</p>
            </div>
            <div className="buy-btns">
                <Counter 
                changeCount={props.changeCount}
                count={props.count}
                />
                <BuyButton 
                itemsQuantity={props.count}
                addItems={props.addItems}
                />
            </div>
        </div>
    )    
}

