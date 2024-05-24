import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Maincontext } from '../context/Mainprovider5'
import "./Navbar.scss"
function Navbar() {
    const {Basket,Wishlist} = useContext(Maincontext)
  return (
    <> 


    <header>
      <div className='Header_container'>

       <div className='text'>FOUNDATION </div>
    <div className='Navbar_ul'>
        <ul className='Navbar_list'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link to={"admin"}>Admin</Link></li>
            <li><Link to={"add"}>Add</Link></li>
            <li><Link to={"basket"}>Basket{Basket.length}</Link></li>
            <li><Link to={"wishlist"}>Wishlist{Wishlist.length}</Link></li>
            </ul>
            </div>
      <button className='hiddenbtn'><i class="fa-solid fa-bars"></i></button>
      </div>
    </header>
    </>
  )
}

export default Navbar