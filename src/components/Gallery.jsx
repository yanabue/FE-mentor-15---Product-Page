import {useState} from 'react'

export default function Gallery(props) {

    const [mainImgUrl, setMainImgUrl] = useState('images/image-product-1.jpg');

    const imageUrls = [
        'images/image-product-1.jpg',
        'images/image-product-2.jpg',
        'images/image-product-3.jpg',
        'images/image-product-4.jpg'
    ]

    function changeMain(index){
        

        setMainImgUrl(imageUrls[index])
        
    }

    return (
    <div className="gallery">
        <button onClick={props.toggleLightbox}> 
            <img className="main-img" src={mainImgUrl} alt="shoes image"/>
        </button>    
        <button className="right-arrow" style={{display: props.isLightbox ? "flex" : 'none'}}>
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none"/></svg>
        </button>
        <button className="left-arrow" style={{display: props.isLightbox ? "flex" : 'none'}}>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none"/></svg>
        </button>
        <button className="close" style={{display: props.isLightbox ? "block" : 'none'}}>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D"/></svg>
        </button>
        <div className="small-images">
            <button className={mainImgUrl === imageUrls[0] ? "img-btn hover-btn selected" : 'img-btn hover-btn'} onClick={changeMain.bind(null, 0, event)}>
                <img src="images\image-product-1-thumbnail.jpg" alt="smaller shoes image" />
            </button>    
            <button className={mainImgUrl === imageUrls[1] ? "img-btn hover-btn selected" : 'img-btn hover-btn'} onClick={changeMain.bind(null, 1, event)}>
                <img src="images\image-product-2-thumbnail.jpg" alt="smaller shoes image" />
            </button>                  
            <button className={mainImgUrl === imageUrls[2] ? "img-btn hover-btn selected" : 'img-btn hover-btn'} onClick={changeMain.bind(null, 2, event)}>
                <img src="images\image-product-3-thumbnail.jpg" alt="smaller shoes image" />
            </button>  
            <button className={mainImgUrl === imageUrls[3] ? "img-btn hover-btn selected" : 'img-btn hover-btn'} onClick={changeMain.bind(null, 3, event)}>
                <img src="images\image-product-4-thumbnail.jpg" alt="smaller shoes image" />
            </button>
        </div>
    </div>
    )
}