import React, { useEffect } from 'react'
import './App.css'

export default function Product21() {
  useEffect(() => {
    var ProductImg = document.getElementById('ProductImg')
    var SmallImg = document.getElementsByClassName('small-img')

    SmallImg[0].onclick = function () {
      ProductImg.src = SmallImg[0].src
    }
    SmallImg[1].onclick = function () {
      ProductImg.src = SmallImg[1].src
    }
    SmallImg[2].onclick = function () {
      ProductImg.src = SmallImg[2].src
    }
    SmallImg[3].onclick = function () {
      ProductImg.src = SmallImg[3].src

      var MenuItems = document.getElementById('MenuItems')

      MenuItems.style.maxHeight = '0px'

      function menutoggle() {
        if (MenuItems.style.maxHeight == '0px') {
          MenuItems.style.maxHeight = '200px'
        } else {
          MenuItems.style.maxHeight = '0px'
        }
      }
    }
  }, [])

  return (
    <>
      <div class="small-container single-product">
        <div class="row">
          <div class="col-2">
            <img src="products-21.jpg" width="100%" id="ProductImg" />

            <div class="small-img-row">
              <div class="small-img-col">
                <img src="products-21.jpg" width="100%" class="small-img" />
              </div>
              <div class="small-img-col">
                <img src="products-21.1.jpg" width="100%" class="small-img" />
              </div>
              <div class="small-img-col">
                <img src="products-21.2.jpg" width="100%" class="small-img" />
              </div>
              <div class="small-img-col">
                <img src="products-21.3.jpg" width="100%" class="small-img" />
              </div>
            </div>
          </div>
          <div class="col-2">
            <p>Home / Shoes</p>
            <h1>Nike Savaleos</h1>
            <h4>$125.00</h4>
            <select>
              <option>Select Size</option>
              <option>40</option>
              <option>41</option>
              <option>42</option>
              <option>43</option>
              <option>44</option>
            </select>
            <input type="number" value="1" />
            <a href="cart" class="btn">
              Add to Cart
            </a>
            <h3>
              Product Details <i class="fa fa-indent" />
            </h3>
            <br />
            <p>
              Give your summer wardrobe a style uprage with the Woman's Actiove
              T-shirt. Team it with a pair of shorts for your morning workout or
              a denims for an evening out.
            </p>
          </div>
        </div>
      </div>

      <div class="small-container">
        <div class="row row-2">
          <h2>Related Products</h2>
          <a href="products2">
            <p>View More</p>
          </a>
        </div>

        <div class="small-container">
          <div class="row">
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
              <p>$95.00</p>
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
          </div>
        </div>
      </div>
    </>
  )
}
