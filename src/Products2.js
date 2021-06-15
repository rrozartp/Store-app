import React from 'react'
import './App.css'

export default function Products2() {
  return (
    <>
      <div class="small-container">
        <div class="row row-2">
          <h2>All Products</h2>
          <select>
            <option>Default Shorting</option>
            <option>Default price</option>
            <option>Default rating</option>
          </select>
        </div>

        <div class="row">
          <div class="col-4">
            <a href="product13">
              <img src="products-13.jpg" />
              <h4>Adidas Runfalcon</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star-half-o" />
            </div>
            <p>$99.00</p>
          </div>

          <div class="col-4">
            <a href="product14">
              <img src="products-14.jpg" />
              <h4>Gucci Pullover</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
            </div>
            <p>$670.00</p>
          </div>

          <div class="col-4">
            <a href="product15">
              <img src="products-15.jpg" />
              <h4>Apple watch</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
            </div>
            <p>$550.00</p>
          </div>

          <div class="col-4">
            <a href="product16">
              <img src="products-16.jpg" />
              <h4>Swarovski Set</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star-o" />
            </div>
            <p>$190.00</p>
          </div>

          <div class="col-4">
            <a href="product17">
              <img src="products-17.jpg" />
              <h4>Gold 14K Jewerly</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star-half-o" />
            </div>
            <p>$250.00</p>
          </div>

          <div class="col-4">
            <a href="product18">
              <img src="products-18.jpg" />
              <h4>Rolex Quality-AAA</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
            </div>
            <p>$25,000.00</p>
          </div>

          <div class="col-4">
            <a href="product19">
              <img src="products-19.jpg" />
              <h4>DSQUARED Jeans</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star-o" />
            </div>
            <p>$45.00</p>
          </div>

          <div class="col-4">
            <a href="product20">
              <img src="products-20.jpg" />
              <h4>Louis Vuitton Jacket</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
            </div>
            <p>$1650.00</p>
          </div>

          <div class="col-4">
            <a href="product21">
              <img src="products-21.jpg" />
              <h4>Nike Savaleos</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star-half-o" />
            </div>
            <p>$125.00</p>
          </div>

          <div class="col-4">
            <a href="product22">
              <img src="products-22.jpg" />
              <h4>Audemars Piguet</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
            </div>
            <p>$450.00</p>
          </div>

          <div class="col-4">
            <a href="product23">
              <img src="products-23.jpg" />
              <h4>Vans T-Shirt</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star-half-o" />
              <i class="fa fa-star-o" />
            </div>
            <p>$25.00</p>
          </div>

          <div class="col-4">
            <a href="product24">
              <img src="products-24.jpg" />
              <h4>Vans Shoes</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star-half-o" />
            </div>
            <p>$95.00</p>
          </div>
        </div>

        <div class="page-btn">
          <a href="products1">
            <span>1</span>
          </a>
          <a href="products2">
            <span>2</span>
          </a>
          <a href="products3">
            <span>3</span>
          </a>
          <a href="products4">
            <span>4</span>
          </a>
          <span>&#8594;</span>
        </div>
      </div>

      {/* footer */}

      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col-1">
              <h3>Download Our App</h3>
              <p>Download App for Android and Ios mobile phone.</p>
              <div class="app-logo">
                <img src="playstore-logo.jpg" />
                <img src="appstore.jpg" />
              </div>
            </div>
            <div class="footer-col-2">
              <img src="logo.png" />
              <p>
                Our Purpose is to sustainably Make the Pleasure and Benefits os
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
