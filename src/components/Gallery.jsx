

export default function Gallery() {
    return (
    <div className="gallery">
        <img src="images\image-product-1.jpg" alt="shoes image" className="main-img" />
        <div className="small-images">
            <button className="img-btn selected">
                <img src="images\image-product-1-thumbnail.jpg" alt="smaller shoes image" />
            </button>    
            <button className="img-btn">
                <img src="images\image-product-2-thumbnail.jpg" alt="smaller shoes image" />
            </button>                  
            <button className="img-btn">
                <img src="images\image-product-3-thumbnail.jpg" alt="smaller shoes image" />
            </button>  
            <button className="img-btn">
                <img src="images\image-product-4-thumbnail.jpg" alt="smaller shoes image" />
            </button>
        </div>
    </div>
    )
}