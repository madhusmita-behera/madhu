import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ListDemo from '../listitem/ListDemo'
import ListDemo1 from '../listitem/ListDemo1'
import ProductsTable from '../listitem/ProductsTable'
import ContactUs from '../routing/ContactUs';
import AboutUs from '../routing/AboutUs';
import Careers from '../routing/Careers';
import ProductList from '../listitem/ProductList';
import Home from '../routing/Home';
import ProductDetails from '../listitem/ProductDetails';
import NotFound from '../routing/NotFound';
export default function Body() {
  return (
    <div className='body'>
    {/*<div style={{textAlign:"center",color:"red"}}>This is Body Component</div>*/}
    {/*<ListDemo />*/}
   {/*<ListDemo1 />*/}
   <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/home" element={<Home />}/>
      <Route exact path="/contactus" element={<ContactUs />}/>
      <Route exact path="/careers" element={<Careers />}/>
      <Route exact path="/aboutus" element={<AboutUs />}/>
      <Route exact path="/productlist" element={<ProductList />}/>
      <Route exact path="/productdetails/:id" element={<ProductDetails />}/>
      <Route exact path="*" element={<NotFound />}/>
    </Routes>
   
  
  
    </div>
  );
}
