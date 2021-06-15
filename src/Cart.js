import React, { useEffect } from 'react'
import './App.css'

export default function Cart() {
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
      <div class="small-container cart-page">
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          <tr>
            <td>
              <div class="cart-info">
                <img src="products-white.jpg" />
                <div>
                  <p>Nike Printed T-shirt</p>
                  <small>Price: $50.00</small>
                  <br />
                  <button class="btn-removed" type="button">
                    Remove
                  </button>
                </div>
              </div>
            </td>
            <td>
              <input type="number" value="1" />
            </td>
            <td>$50.00</td>
          </tr>

          <tr>
            <td>
              <div class="cart-info">
                <img src="products-2.jpg" />
                <div>
                  <p>Nike Printed T-shirt</p>
                  <small>Price: $35.00</small>
                  <br />
                  <button class="btn-removed" type="button">
                    Remove
                  </button>
                </div>
              </div>
            </td>
            <td>
              <input type="number" value="1" />
            </td>
            <td>$35.00</td>
          </tr>

          <tr>
            <td>
              <div class="cart-info">
                <img src="products-3.jpg" />
                <div>
                  <p>Nike Printed T-shirt</p>
                  <small>Price: $90.00</small>
                  <br />
                  <button class="btn-removed" type="button">
                    Remove
                  </button>
                </div>
              </div>
            </td>
            <td>
              <input type="number" value="1" />
            </td>
            <td>$90.00</td>
          </tr>
        </table>

        <div class="total-price">
          <table>
            <tr>
              <td>Subtotal</td>
              <td>$200.00</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>$35.00</td>
            </tr>
            <tr>
              <td>total</td>
              <td>$235.00</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col-1">
              <h3>Download Our App</h3>
              <p>Download App for Android ans IOS mobile phone.</p>
              <div class="app-logo">
                <img src="playstore-logo.jpg" />
                <img src="appstore.jpg" />
              </div>
            </div>
            <div class="footer-col-2">
              <img src="logo.png" />
              <p>
                Our Purpose Is to Sustainably Make The Pleasure and Benefits of
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
