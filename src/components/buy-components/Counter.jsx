/* eslint-disable react/prop-types */

export default function Counter(props){

    return (
        <div className="counter">
            <button className="minus hover-btn">
                <img id="minus" src="images\icon-minus.svg" alt="minus icon" onClick={props.changeCount}/>
            </button>
            <p className="counter-value">{props.count}</p>           
            <button className="plus hover-btn">
                <img id="plus" src="images\icon-plus.svg" alt="plus icon" onClick={props.changeCount}/>
            </button>
        </div>
    )
}

