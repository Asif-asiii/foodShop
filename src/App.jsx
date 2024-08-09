import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import { Fragment } from 'react'
import Verify from './pages/Verify/Verify'
import MyOrder from './pages/MyOrders/MyOrder'
const App = () => {
  const [showLogin,setShowLogin] = useState(false);
  return (
    <Fragment>  
    {showLogin? <LoginPopUp setShowLogin={setShowLogin}/>:<Fragment></Fragment>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/cart' element={<Cart/>} />
      <Route exact path='/order' element={<PlaceOrder/>} />
      <Route path='/verify' element={<Verify/>} />
      <Route path='/myorders' element={<MyOrder/>} />
      </Routes>
    </div>
    <Footer/>
    </Fragment>

  )
}

export default App