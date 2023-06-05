import React from 'react'
import Header from './components/header/footer/Header'
import Footer from './components/header/footer/Footer'
import Body from './components/body/Body'
import Navbar from './components/navbar/Navbar'
import Carousel from './components/carousel/Carousel'
import Categories from './components/categories/Categories'
import ListDemo from './components/listitem/ListDemo'
import ListDemo1 from './components/listitem/ListDemo1'
import ListDemo2 from './components/listitem/ListDemo2'
import Products from './components/listitem/ProductsTable'
import ProductsTable from './components/listitem/ProductsTable'
import ProductList from './components/listitem/ProductList'



export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      {/*<Categories />*/}
     {/* <Carousel />*/}
      <Body />
    {/* <ListDemo></ListDemo>*/}
     {/*<ListDemo1></ListDemo1>*/}
     {/*<ListDemo2></ListDemo2>*/}
     {/*<ProductsTable />*/}
     {/*<ProductList />*/}
     
     
      <Footer />
 
    </div>
    
  )
}
