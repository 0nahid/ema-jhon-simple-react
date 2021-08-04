import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import Product from '../Product/Product';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const handleAddProduct = (product) => {
        console.log('Product selected', product);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {products.map(product =>
                    <Product
                        handleAddProduct={() => handleAddProduct(product)}
                        product={product}>
                    </Product>
                )}
            </div>
            <div className="cart-container">
                <h3>This is cart</h3>
            </div>
        </div>
    );
};

export default Shop;
