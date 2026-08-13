import React, { useState } from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import ProductList from './ProductList'
import WishList from './WishList'
import Cart from './Cart'
import OrderSummary from './OrderSummary'



const Home = () => {

  const [search, setSearch] = useState('')
  const [handel, setHandel] = useState(null)
  const [cart, setCart] = useState([])
  const [orderSummary, setOrderSummary] = useState(false)
  const [wishlist, setWishlist] = useState([])




  const handleScroll = () => {
    const section = document.getElementById('section-handle');

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handelpanel = (tabname) => {
    setHandel(prev => (
      prev === tabname ? null : tabname
    ))
  }

  const closePanel = () => {
    setHandel(null);
  };

  const addToCart = (product) => {
    const alredyAded = cart.find(item => item.id === product.id)

    if (alredyAded) {
      alert('item is alredy in the cart')
      return;
    }
    setCart([...cart, { ...product, quantity: 1 }])
  }

  const removeproduct = (product) => {
    setCart(cart.filter((item) => item.id !== product.id))
  }

  const quantityincrement = (product) => {
    setCart(cart.map(item =>
      item.id === product.id ?
        { ...item, quantity: item.quantity + 1 } : item
    ))
  }


  const quantitydecrement = (product) => {
    setCart(cart.map(item =>
      item.id === product.id && item.quantity > 1 ?
        { ...item, quantity: item.quantity - 1 } : item
    ))
  }

  const closeOrderSummary = () => {
    setOrderSummary(false)
  }
  const orderConfirm = () => {
    alert('Your order Is Placed .. Thank You !')
    setCart([])

  }


  const addTowish = (product) => {

    const alreadyAdded = wishlist.find(
      item => item.id === product.id
    )
    if (alreadyAdded) {
      alert('Item is already in wishlist')
      return
    }
    setWishlist([...wishlist, product])
  }
 
  const removeFromWishlist = (product) => {
    setWishlist(
      wishlist.filter(item => item.id !== product.id)
    )
  }
  return (
    <div>
      <Navbar
        handleScroll={handleScroll}
        setSearch={setSearch}
        handelpanel={handelpanel}
      />

      <Banner />


      <ProductList
        search={search}
        addToCart={addToCart}
        addTowish={addTowish}
      />


      <WishList
        handel={handel}
        closePanel={closePanel}
        wishlist={wishlist}
        addToCart={addToCart}
        removeFromWishlist={removeFromWishlist}
      />


      <Cart
        handel={handel}
        closePanel={closePanel}
        cart={cart}
        removeproduct={removeproduct}
        quantityincrement={quantityincrement}
        quantitydecrement={quantitydecrement}
        setOrderSummary={setOrderSummary}

      />


      {
        orderSummary &&
        <OrderSummary
          cart={cart}
          closeOrderSummary={closeOrderSummary}
          orderConfirm={orderConfirm}
        />
      }



    </div>
  )
}

export default Home