import React from 'react'
import './App.css'

export default function About() {
  return (
    <>
      <div class="account-page">
        <div class="container">
          <div class="row">
            <div class="col-2">
              <img src="Image1.png" width="100%" />
            </div>
            <div id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8285779002754!2d20.43270381574869!3d42.37597054208873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353b1f1771b56c7%3A0x93492597e0bc8c2a!2sYll%20Morina%2C%20Gjakov%C3%AB!5e1!3m2!1sen!2s!4v1623142520307!5m2!1sen!2s"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
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
