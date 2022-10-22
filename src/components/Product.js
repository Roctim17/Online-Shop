// import React, { useEffect, useState } from 'react';
import useProduct from '../Hooks/useProduct';
import "../Style/Product.css"
import SingleProduct from './SingleProduct';

const Product = () => {
    const [products ]= useProduct([]);
    // const [categories,setCategories] = useState([]);
    // useEffect(() => {
    //     if (products) {
    //         const sorted = [...products].reverse();
    //         setCategories(sorted);
    //     }
    // }, [products]);
   
    return (
        <section id="collection">
            <div class="container collection">
                <h3>Popular collection</h3>
                {/* <select name='member' className="select select-bordered">
                                    <option disabled selected>Select</option>
                                    {
                                        categories.map(member => <option className='option'
                                           
                                            value={member.category}
                                        >
                                            {member.category}
                                        </option>

                                        )
                                    }
                                </select> */}
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