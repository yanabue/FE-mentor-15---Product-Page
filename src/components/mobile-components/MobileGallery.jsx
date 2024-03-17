import { useState } from "react";

export default function MobileGallery(){

    const [imgIndex, setImgIndex] = useState(0)

    const imageUrls = [
        'images/image-product-1.jpg',
        'images/image-product-2.jpg',
        'images/image-product-3.jpg',
        'images/image-product-4.jpg'
    ]

    function moveImg(direction){
        if (direction === 'right'){
            setImgIndex(prevImgIndex => {
                return prevImgIndex === 3 ? 0 : prevImgIndex + 1
            })
        } else if (direction === 'left'){
            setImgIndex(prevImgIndex => {
                return prevImgIndex === 0 ? 3 : prevImgIndex - 1
            })
        }
    }

    return (
        <div className="mobile-gallery">
            <button className="right-arrow-mobile" onClick={moveImg.bind(null, 'right')}>
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none"/></svg>
            </button>
            <button className="left-arrow-mobile" onClick={moveImg.bind(null,'left')}>
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none"/></svg>
            </button>
            <img className="main-img" src={imageUrls[imgIndex]} alt="shoes image"/>
        </div>
    )
}