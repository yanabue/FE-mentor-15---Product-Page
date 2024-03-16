/* eslint-disable react/prop-types */

export default function MobileLinks(props){
    return (
    <div className="modal">
        <div className="mobile-links">
            <button className="close-mobile-menu" onClick={props.handleClick}>
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D"/></svg>
            </button>
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
    </div>
    )
}