import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import StoreContextProvider from './context/StoreContext';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = ()=> {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
    <div className="app">
      <StoreContextProvider>
      <BrowserRouter>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
      </BrowserRouter>
      </StoreContextProvider>
    </div>
    <Footer/>
    </>
  );
}

export default App;
