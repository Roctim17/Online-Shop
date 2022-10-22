import React, { useEffect, useState } from 'react';
import "../Style/Product.css"
import SingleProduct from './SingleProduct';

const Product = () => {
    const [products, setProducts]= useState([]);
    useEffect(()=>{
        fetch('https://fast-reef-84114.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[products])
    console.log(products)
    return (
        <section id="collection">
            <div class="container collection">
                <h3>Popular collection</h3>
                <div className='single-collection'>
                {
                    products.map(product => <SingleProduct
                        key={product._id}
                        product={product}
                    ></SingleProduct>)
                }
                  </div>
                    
                
            </div>
        </section>
    );
};

export default Product;