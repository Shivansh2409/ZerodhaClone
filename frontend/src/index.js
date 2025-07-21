import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/products/ProductPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import SignUp from './landing_page/signup/Signup';
import SignIn from './landing_page/signIn/SignIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/products' element={<ProductPage/>}/>
      <Route path='/support' element={<SupportPage/>} />
    </Routes>
    <Footer />
  </BrowserRouter>
);


