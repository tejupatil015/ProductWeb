import React from 'react'
import Logo from '../assets/logo (1).png'
import { FaHeart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

const Navbar = ({ handleScroll , setSearch , handelpanel }) => {
  return (
    <div className='navbar'>
      <nav className='nav'>
        <a href="#">
          <img src={Logo} />
        </a>

        <input
          name='search'
          id='search'
          placeholder='search'
          autoComplete='off'
          type='text'
          className='searchbar'
          onFocus={handleScroll}
          onChange={(e)=>setSearch(e.target.value) }
        />

        <button className='hearticon' onClick={()=> handelpanel('wishlist')}><FaHeart /></button>

        <button className='bagicon' onClick={()=> handelpanel('cart')}> <IoBag /> </button>
      </nav>
    </div>
  )
}

export default Navbar