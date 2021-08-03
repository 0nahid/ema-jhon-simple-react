import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10)
    return (
        <div>
            I'm from shop.
            I've {products.length} products in my shop.
            <ul>
                {products.map(product=>
                    <li>{product.name}</li>
                    )}
            </ul>
        </div>
    );
};

export default Shop;