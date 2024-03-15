/* eslint-disable react/prop-types */
import Links from './nav-components/Links'
import Profile from './nav-components/Profile'

export default function NavBar(props){
    


    return (
    <nav className="nav-bar">
        <div className="nav-left">
            <img src="images\logo.svg" className="nav-logo"/>
            <Links />
        </div>
        <div className="nav-right">
            <button onClick={props.handleClick}>
                <img src="images\icon-cart.svg" className="cart-icon"/>
            </button>
            <Profile />
        </div>
        
    </nav>

)
}