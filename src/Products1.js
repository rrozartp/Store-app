import React from 'react'
import './App.css'

export default function Products1() {
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
            <a href="product1">
              <img src="products-1.jpg" />
              <h4>Red Printed T-shirt</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>

          <div class="col-4">
            <a href="product2">
              <img src="products-2.jpg" />
              <h4>Pullover</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star-half-o" />
              <i class="fa fa-star-o" />
            </div>
            <p>$35.00</p>
          </div>

          <div class="col-4">
            <a href="product3">
              <img src="products-3.jpg" />
              <h4>Nike Air-Max</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star-o" />
            </div>
            <p>$90.00</p>
          </div>

          <div class="col-4">
            <a href="product4">
              <img src="products-4.jpg" />
              <h4>Superdry Pullover</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>

          <div class="col-4">
            <a href="product5">
              <img src="products-5.jpg" />
              <h4>Swear Woman</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star-o" />
            </div>
            <p>$40.00</p>
          </div>

          <div class="col-4">
            <a href="product6">
              <img src="products-6.jpg" />
              <h4>Classic T-shirt</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star-o" />
            </div>
            <p>$25.00</p>
          </div>

          <div class="col-4">
            <a href="product7">
              <img src="products-7.jpg" />
              <h4>Superdry Fit</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star-o" />
            </div>
            <p>$20.00</p>
          </div>

          <div class="col-4">
            <a href="product8">
              <img src="products-8.jpg" />
              <h4>Puma</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star-o" />
            </div>
            <p>$60.00</p>
          </div>

          <div class="col-4">
            <a href="product9">
              <img src="products-9.jpg" />
              <h4>Nike Bag</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star-o" />
            </div>
            <p>$95.00</p>
          </div>

          <div class="col-4">
            <a href="product10">
              <img src="products-10.jpg" />
              <h4>Jeans</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star-o" />
            </div>
            <p>$75.00</p>
          </div>

          <div class="col-4">
            <a href="product11">
              <img src="products-11.jpg" />
              <h4>Channel Bag</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star-o" />
            </div>
            <p>$160.00</p>
          </div>

          <div class="col-4">
            <a href="product12">
              <img src="products-12.jpg" />
              <h4>Nike T-shirt</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star-o" />
            </div>
            <p>$110.00</p>
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
