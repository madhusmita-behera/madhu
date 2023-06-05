import React from 'react';
import products from "./products.json";
import { Link } from 'react-router-dom';

export default function ProductList() {
  return (
  <>
  <h2 className="text-center">Product List</h2>

<div className="container">
    <div className="row">
        {products.map((product)=>{
            return(
             <div className="col-sm-3" key={product.id}>
                <div class="card" >
  <img 
  src={product.image} 
  className="card-img-top" 
  alt="aa" 
  width="200" 
  height="150"
  />
  <div className="card-body text-center">
    <h5 className="card-title">{product.category}</h5>
    <p className="card-text">{product.title}</p>
    <p className="card-text">{product.price}</p>
    {/*<a href="#" class="btn btn-primary">Buy Now</a>*/}
    <button>
      <Link to={'/productdetails/${product.id}'}>Details</Link>
      </button>
  </div>
                </div>
            </div>)        })}
        
    </div>
</div> 
  </>
  );
}
