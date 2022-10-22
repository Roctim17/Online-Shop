import React from 'react';
import "../Style/Product.css"

const SingleProduct = ({ product }) => {
    const {  productName, imgUrl, price,category } = product;
   
    return (
        <>
             <article class="itemblog">
                        <img src={imgUrl} alt=""/>
                        <h4>{productName}</h4>
                        <h5>${price}</h5>
                        {/* <div class="rating">
                            <p><i class="fas fa-star full"></i></p>
                            <p><i class="fas fa-star full"></i></p>
                            <p><i class="fas fa-star full"></i></p>
                            <p><i class="fas fa-star full"></i></p>
                            <p><i class="fas fa-star full"></i></p>
                            <p>4.99</p>
                        </div> */}
                        <p>{category}</p>
                     <button className='cartBtn '> Add To Cart</button>
                    </article>
       </>
    );
};

export default SingleProduct;