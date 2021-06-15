import React, { useEffect } from 'react'
import './App.css'

var LoginForm = document.getElementById('loginForm')
var RegForm = document.getElementById('RegForm')
var Indicator = document.getElementById('Indicator')

function register() {
  RegForm.style.transform = 'translateX(0px)'
  LoginForm.style.transform = 'translateX(0px)'
  Indicator.style.transform = 'translateX(100px)'
}

function login() {
  RegForm.style.transform = 'translateX(300px)'
  LoginForm.style.transform = 'translateX(300px)'
  Indicator.style.transform = 'translateX(0px)'
}

export default function Account() {
  useEffect(() => {
    var MenuItems = document.getElementById('MenuItems')

    MenuItems.style.maxHeight = '0px'

    function menutoggle() {
      if (MenuItems.style.maxHeight == '0px') {
        MenuItems.style.maxHeight = '200px'
      } else {
        MenuItems.style.maxHeight = '0px'
      }
    }
  }, [])
  return (
    <>
      <div class="account-page">
        <div class="container">
          <div class="row">
            <div class="col-2">
              <img src="Image1.png" width="100%" />
            </div>
            <div class="col-2">
              <div class="form-container">
                <div class="form-btn">
                  <span onclick="login()">Login</span>
                  <span onclick="register()">Register</span>
                  <hr id="Indicator" />
                </div>
                <form id="LoginForm">
                  <input type="text" placeholder="Username" />
                  <input type="password" placeholder="Password" />
                  <button type="submit" class="btn">
                    Login
                  </button>
                  <a href="">Forgot Password</a>
                </form>

                <form id="RegForm">
                  <input type="text" placeholder="Username" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button type="submit" class="btn">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col-1">
              <h3>Download Our App</h3>
              <p>Download App for Android and IOS mobile phone.</p>
              <div class="app-logo">
                <img src="playstore-logo.jpg" />
                <img src="appstore.jpg" />
              </div>
            </div>
            <div class="footer-col-2">
              <img src="logo.png" />
              <p>
                Our Purpose Is to Substainably Make The Pleasure and Benefits of
                Sports Accessible to the Many.
              </p>
            </div>
            <div class="footer-col-3">
              <h3>Useful Links</h3>
              <ul>
                <li>Coupons</li>
                <li>Blog Post</li>
                <li>Return Policy</li>
                <li>Join Affiliate</li>
              </ul>
            </div>
            <div class="footer-col-4">
              <h3>Follow us</h3>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
              </ul>
            </div>
          </div>
          <hr />
          <p class="copyright">Copyright</p>
        </div>
      </div>
    </>
  )
}
