import React, { useEffect } from 'react'
import './App.css'

export default function Home() {
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
      <div class="header">
        <div class="container" style={{ paddingTop: '1px' }}>
          <div class="row">
            <div class="col-2">
              <h1>
                Give Your Workout
                <br />A New Style!
              </h1>
              <p>
                Succes isn't always about greatness. It's about consistency.
                Consistent <br /> hard work gains success. Greatness will come.
              </p>
              <a href="products1" class="btn">
                Explore now &#8594;
              </a>
            </div>
            <div class="col-2">
              <img src="image1.png" />
            </div>
          </div>
        </div>
      </div>

      {/* featured categories */}

      <div class="categories">
        <div class="small-container">
          <div class="row">
            <div class="col-3">
              <img src="categories-1.jpg" />
            </div>
            <div class="col-3">
              <img src="categories-2.jpg" />
            </div>
            <div class="col-3">
              <img src="categories-3.jpg" />
            </div>
          </div>
        </div>
      </div>

      {/* featured products */}

      <div class="small-container">
        <h2 class="title">Featured Products</h2>
        <div class="row">
          <div class="col-4">
            <a href="product1">
              <img src="products-1.jpg" />
            </a>
            <a href="">
              <h4>Red Printed T-Shirt</h4>
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
            <a href="">
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
            <a href="">
              <img src="products-3.jpg" />
              <h4>Nike Air-Max</h4>
            </a>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star-half-o" />
            </div>
            <p>$90.00</p>
          </div>

          <div class="col-4">
            <a href="">
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

          <h2 class="title">Latest Products</h2>
          <div class="row">
            <div class="col-4">
              <a href="">
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
              <a href="">
                <img src="products-6.jpg" />
                <h4>Classic T-shirt</h4>
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
              <a href="">
                <img src="products-7.jpg" />
                <h4>Fit Clothes</h4>
              </a>
              <div class="rating">
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star-half-o" />
              </div>
              <p>$20.00</p>
            </div>

            <div class="col-4">
              <a href="">
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
              <a href="">
                <img src="products-9.jpg" />
                <h4>Nike Bag</h4>
              </a>
              <div class="rating">
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
              </div>
              <p>$95.00</p>
            </div>

            <div class="col-4">
              <a href="">
                <img src="products-10.jpg" />
                <h4>Jeans</h4>
              </a>
              <div class="rating">
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star-half-o" />
                <i class="fa fa-star-o" />
              </div>
              <p>$75.00</p>
            </div>

            <div class="col-4">
              <a href="">
                <img src="products-11.jpg" />
                <h4>Channel Bag</h4>
              </a>
              <div class="rating">
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
              </div>
              <p>$160.00</p>
            </div>

            <div class="col-4">
              <a href="">
                <img src="products-12.jpg" />
                <h4>Nike T-shirt</h4>
              </a>
              <div class="rating">
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
              </div>
              <p>$110.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* offer */}

      <div class="offer">
        <div class="small-container">
          <div class="row">
            <div class="col-2">
              <img src="smartband4.png" class="offer-img" />
            </div>
            <div class="col-2">
              <p>Exlusively Available on OnlineStore</p>
              <h1>Smart Band 4</h1>
              <small>
                The Mi smart Bnad 4 features a 39.9% larger (than Mi Bnd 3)
                Amoled color full-touch display with adjustable brightness, so
                everything is clear as can be.
              </small>
              <br />
              <a href="" class="btn">
                Buy Now &#8594;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* testimonial */}

      <div class="testimonial">
        <div class="small-container">
          <div class="row">
            <div class="col-3">
              <i class="fa fa-quote-left" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry-s standard dummy
                text ever{' '}
              </p>
              <div class="rating">
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
              </div>
              <img src="user-1.jpg" />
              <h3>Elon Musk</h3>
            </div>
            <div class="col-3">
              <i class="fa fa-quote-left" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry-s standard dummy
                text ever{' '}
              </p>
              <div class="rating">
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
              </div>
              <img src="user-2.jpg" />
              <h3>Donald Trump</h3>
            </div>

            <div class="col-3">
              <i class="fa fa-quote-left" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry-s standard dummy
                text ever{' '}
              </p>
              <div class="rating">
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
              </div>
              <img src="user-3.jpg" />
              <h3>Joe Biden</h3>
            </div>
          </div>
        </div>
      </div>

      {/* brands */}

      <div class="brands">
        <div class="small-container">
          <div class="row">
            <div class="col-5">
              <img src="paypal.png" />
            </div>
            <div class="col-5">
              <img src="logo-mastercard.png" />
            </div>
            <div class="col-5">
              <img src="logo-visa.png" />
            </div>
            <div class="col-5">
              <img src="logo-maestro.png" />
            </div>
            <div class="col-5">
              <img src="ria-logo.png" />
            </div>
          </div>
        </div>
      </div>

      {/* footer */}

      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col-1">
              <h3>Download Our App</h3>
              <p>Dowmload App for Android and IOS mobile phone.</p>
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
