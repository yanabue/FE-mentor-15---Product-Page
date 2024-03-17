/* eslint-disable react/prop-types */

export default function MobileGallery(props){

    return (
        <div className="mobile-gallery">
            <button className="right-arrow-mobile" onClick={props.moveImg.bind(null, 'right')}>
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none"/></svg>
            </button>
            <button className="left-arrow-mobile" onClick={props.moveImg.bind(null, 'left')}>
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none"/></svg>
            </button>
            <img className="main-img" src={props.mainImgUrl} alt="shoes image"/>
        </div>
    )
}