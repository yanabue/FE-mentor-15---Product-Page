/* eslint-disable react/prop-types */

export default function Counter(props){


    return (
        <div className="counter">
            <button className="minus">
                <img id="minus" src="images\icon-minus.svg" alt="minus icon" onClick={props.handleClick}/>
            </button>
            <p className="counter-value">{props.count}</p>           
            <button className="plus">
                <img id="plus" src="images\icon-plus.svg" alt="plus icon" onClick={props.handleClick}/>
            </button>
        </div>
    )
}

