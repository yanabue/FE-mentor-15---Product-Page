import { useState } from 'react'
import NavBar from './components/NavBar'
import Gallery from './components/Gallery'
import Description from './components/Description'
import ShoppingCart from './components/nav-components/ShoppingCart'


function App() {

  
  const [cartDisplay, setCartDisplay] = useState("none")

  function openCart(){
      setCartDisplay(prevCartDisplay => {
          return prevCartDisplay === 'none' ? 'block' : 'none' 
      })
  }

  const [cartItems, setCartItems] = useState([{
    key: (Math.random() * 50),
    title: "title",
    price: 125,
    quantity: 3
  }])


  function addItems(){
    setCartItems(prevItemsList => {
        return [
            ...prevItemsList,
            {
                key: (Math.random() * 50),
                title: "title",
                price: 125,
                quantity: 3
              }
        ]
    })
}

  return (
    <>
     <header className="header">
        <NavBar handleClick={openCart}/>
        <ShoppingCart isOpen={cartDisplay} cartContent={cartItems}/>
     </header>
     <main className="main">
        <Gallery />
        <Description addItems={addItems}/>
     </main>
    </>
  )
}

export default App
