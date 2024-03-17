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
        <div
          className="modal"
          style={{ display: isLightboxOpen }}
          onClick={toggleLightbox}
        >
          <Gallery className="lightbox" isLightbox={isLightboxOpen} />
        </div>
        {windowWidth > 850 && <Gallery toggleLightbox={toggleLightbox} />}
        {windowWidth <= 850 && <MobileGallery />}
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
