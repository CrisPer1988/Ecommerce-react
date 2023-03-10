import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

const Header = () => {
  return (
    <header>
      <div className='header__content'>
        <h1 className='header__logo'>
            <Link to="/"><h5>e-commerce</h5></Link>
        </h1>
        <nav className='nav__bar-content'>
            <ul className='nab__bar'>
                <li><Link to="/user/login"><i class='bx bx-user'></i>Login</Link></li>
                <li><Link to="/purchases"><i class='bx bx-purchase-tag-alt'></i>Purchases</Link></li>
                <li><Link to="/cart"><i class='bx bx-cart-alt' ></i>Cart</Link></li>
            </ul>
        </nav>
        </div>  
    </header>
  )
}

export default Header