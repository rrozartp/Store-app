import React from 'react'
import './App.css'
import Home from './Home'
import Products1 from './Products1'
import Products2 from './Products2'
import Products3 from './Products3'
import Products4 from './Products4'
import About from './About'
import Account from './Account'
import Nav from './Nav'
import Cart from './Cart'
import Product1 from './Product1'
import Product2 from './Product2'
import Product3 from './Product3'
import Product4 from './Product4'
import Product5 from './Product5'
import Product6 from './Product6'
import Product7 from './Product7'
import Product8 from './Product8'
import Product9 from './Product9'
import Product10 from './Product10'
import Product11 from './Product11'
import Product12 from './Product12'
import Product13 from './Product13'
import Product14 from './Product14'
import Product15 from './Product15'
import Product16 from './Product16'
import Product17 from './Product17'
import Product18 from './Product18'
import Product19 from './Product19'
import Product20 from './Product20'
import Product21 from './Product21'
import Product22 from './Product22'
import Product23 from './Product23'
import Product24 from './Product24'
import Product25 from './Product25'
import Product26 from './Product26'
import Product27 from './Product27'
import Product28 from './Product28'
import Product29 from './Product29'
import Product30 from './Product30'
import Product31 from './Product31'
import Product32 from './Product32'
import Product33 from './Product33'
import Product34 from './Product34'
import Product35 from './Product35'
import Product36 from './Product36'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/products1" component={Products1} />
            <Route path="/products2" component={Products2} />
            <Route path="/products3" component={Products3} />
            <Route path="/products4" component={Products4} />
            <Route path="/about" component={About} />
            <Route path="/account" component={Account} />
            <Route path="/cart" component={Cart} />
            <Route path="/product1" component={Product1} />
            <Route path="/product2" component={Product2} />
            <Route path="/product3" component={Product3} />
            <Route path="/product4" component={Product4} />
            <Route path="/product5" component={Product5} />
            <Route path="/product6" component={Product6} />
            <Route path="/product7" component={Product7} />
            <Route path="/product8" component={Product8} />
            <Route path="/product9" component={Product9} />
            <Route path="/product10" component={Product10} />
            <Route path="/product11" component={Product11} />
            <Route path="/product12" component={Product12} />
            <Route path="/product13" component={Product13} />
            <Route path="/product14" component={Product14} />
            <Route path="/product15" component={Product15} />
            <Route path="/product16" component={Product16} />
            <Route path="/product17" component={Product17} />
            <Route path="/product18" component={Product18} />
            <Route path="/product19" component={Product19} />
            <Route path="/product20" component={Product20} />
            <Route path="/product21" component={Product21} />
            <Route path="/product22" component={Product22} />
            <Route path="/product23" component={Product23} />
            <Route path="/product24" component={Product24} />
            <Route path="/product25" component={Product25} />
            <Route path="/product26" component={Product26} />
            <Route path="/product27" component={Product27} />
            <Route path="/product28" component={Product28} />
            <Route path="/product29" component={Product29} />
            <Route path="/product30" component={Product30} />
            <Route path="/product31" component={Product31} />
            <Route path="/product32" component={Product32} />
            <Route path="/product33" component={Product33} />
            <Route path="/product34" component={Product34} />
            <Route path="/product35" component={Product35} />
            <Route path="/product36" component={Product36} />
          </Switch>
        </div>
      </Router>
    </>
  )
}
