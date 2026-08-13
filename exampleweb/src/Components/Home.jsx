import React, { useState } from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import ProductList from './ProductList'
import WishList from './WishList'
import Cart from './Cart'

const Home = () => {

  const [search, setSearch] = useState('')
  const [handel, setHandel] = useState(null)

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
      />


      <WishList
        handel={handel}
        closePanel= {closePanel}
      />


      <Cart
        handel={handel}
        closePanel={closePanel}
      />
    </div>
  )
}

export default Home