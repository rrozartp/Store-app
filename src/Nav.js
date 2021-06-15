import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <div class="header">
        <div class="container">
          <div class="navbar">
            <div class="logo">
              <a href="home">
                <img src="logo.png" width="125px" />
              </a>
            </div>
            <nav>
              <ul id="MenuItems">
                <Link to="/home">
                  <li>Home</li>
                </Link>
                <Link to="/products1">
                  <li>Products</li>
                </Link>
                <Link to="/about">
                  <li>About</li>
                </Link>
                <Link to="/account">
                  <li>Account</li>
                </Link>
              </ul>
            </nav>
            <a href="cart">
              <img src="Cart.png" width="50px" height="50px" />
            </a>
            <a href="">
              <img src="menu.png" class="menu-icon" onclick="" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
