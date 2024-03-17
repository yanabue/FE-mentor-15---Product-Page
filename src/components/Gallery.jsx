/* eslint-disable react/prop-types */
import MobileGallery from "./mobile-components/MobileGallery";

export default function Gallery(props) {
  
  return (
    <div className="gallery"
    onClick={(e)=> e.stopPropagation()}
    >
      <button onClick={props.toggleLightbox}>
        {props.isLightbox ? <MobileGallery mainImgUrl={props.mainImgUrl} moveImg={props.moveImg}/> : <img className="main-img" src={props.mainImgUrl} alt="shoes image" />}
      </button>
      <button
        className="close"
        style={{ display: props.isLightbox ? "block" : "none" }}
        onClick={props.closeLightbox}
      >
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
          />
        </svg>
      </button>
      <div className="small-images">
        <button
          className={
            props.mainImgUrl === props.imageUrls[0]
              ? "img-btn hover-btn selected"
              : "img-btn hover-btn"
          }
          onClick={props.changeMain.bind(null, 0)}
        >
          <img
            src="images\image-product-1-thumbnail.jpg"
            alt="smaller shoes image"
          />
        </button>
        <button
          className={
            props.mainImgUrl === props.imageUrls[1]
              ? "img-btn hover-btn selected"
              : "img-btn hover-btn"
          }
          onClick={props.changeMain.bind(null, 1)}
        >
          <img
            src="images\image-product-2-thumbnail.jpg"
            alt="smaller shoes image"
          />
        </button>
        <button
          className={
            props.mainImgUrl === props.imageUrls[2]
              ? "img-btn hover-btn selected"
              : "img-btn hover-btn"
          }
          onClick={props.changeMain.bind(null, 2)}
        >
          <img
            src="images\image-product-3-thumbnail.jpg"
            alt="smaller shoes image"
          />
        </button>
        <button
          className={
            props.mainImgUrl === props.imageUrls[3]
              ? "img-btn hover-btn selected"
              : "img-btn hover-btn"
          }
          onClick={props.changeMain.bind(null, 3)}
        >
          <img
            src="images\image-product-4-thumbnail.jpg"
            alt="smaller shoes image"
          />
        </button>
      </div>
    </div>
  );
}
