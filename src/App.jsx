import { useState } from "react";
import NavBar from "./components/NavBar";
import Gallery from "./components/Gallery";
import Description from "./components/Description";
import ShoppingCart from "./components/nav-components/ShoppingCart";
import MobileGallery from "./components/mobile-components/MobileGallery";

function App() {
  const [count, setCount] = useState(0);

  function changeCount(event) {
    event.target.id === "plus"
      ? setCount((prevCount) => prevCount + 1)
      : event.target.id === "minus"
      ? setCount((prevCount) => (prevCount >= 1 ? prevCount - 1 : prevCount))
      : count;
  }

  const [cartDisplay, setCartDisplay] = useState("none");

  function openCart() {
    setCartDisplay((prevCartDisplay) => {
      return prevCartDisplay === "none" ? "block" : "none";
    });
  }

  const [cartItems, setCartItems] = useState([]);

  function addItems() {
    if (count > 0){
    setCartItems((prevItemsList) => {
      return [
        ...prevItemsList,
        {
          id: Math.random() * 50,
          title: "Fall Limited Edition Sneakers",
          price: 125.0000000001,
          quantity: count,
        },
      ];
    });
  }
  }

  function deleteItem(itemId) {
    setCartItems((prevItemsList) => {
      return prevItemsList.filter((item) => item.id !== itemId);
    });
  }

  const [isLightboxOpen, setIsLighbox] = useState("none");

  function toggleLightbox() {
    setIsLighbox((prevLightboxDisplay) => {
      return prevLightboxDisplay === "none" ? "flex" : "none";
    });
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const imageUrls = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
  ];

    const [imgIndex, setImgIndex] = useState(0)
    const [mainImgUrl, setMainImgUrl] = useState(imageUrls[imgIndex]);
  
    function changeMain(index) {
      setMainImgUrl(imageUrls[index]);
    }
    
    function moveImg(direction){
      if (direction === 'right'){
          setImgIndex(prevImgIndex => {
              return prevImgIndex === 3 ? 0 : prevImgIndex + 1
          })
          setMainImgUrl(imageUrls[imgIndex])
      } else if (direction === 'left'){
          setImgIndex(prevImgIndex => {
              return prevImgIndex === 0 ? 3 : prevImgIndex - 1
          })
          setMainImgUrl(imageUrls[imgIndex])
      }
  }

  return (
    <>
      <header className="header">
        <NavBar 
        handleClick={openCart}
        itemsLength={cartItems.length}
        windowWidth={windowWidth}
        />
        <ShoppingCart
          isOpen={cartDisplay}
          cartContent={cartItems}
          deleteItem={deleteItem}
        />
      </header>
      <main className="main">
        {windowWidth > 850 && <div
          className="modal"
          style={{ display: isLightboxOpen }}
          onClick={toggleLightbox}
        >
          <Gallery className="lightbox" isLightbox={isLightboxOpen} closeLightbox={toggleLightbox} moveImg={moveImg} changeMain={changeMain} imageUrls={imageUrls} imgIndex={imgIndex} mainImgUrl={mainImgUrl}/>
        </div>}
        {windowWidth > 850 && <Gallery toggleLightbox={toggleLightbox} changeMain={changeMain} imageUrls={imageUrls} imgIndex={imgIndex} mainImgUrl={mainImgUrl}/>}
        {windowWidth <= 850 && <MobileGallery mainImgUrl={mainImgUrl} moveImg={moveImg}/>}
        <Description
          count={count}
          addItems={addItems}
          changeCount={changeCount}
        />
      </main>
    </>
  );
}

export default App;
