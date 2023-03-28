import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import "./Shop.css";
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data=> setProducts(data));
    },[])

    useEffect(()=>{
        const storedCart = getShoppingCart();
        console.log(storedCart);
    },[])
    const handleAddToCart = (product) =>{
        const newCart = [...cart,product]
        setCart(newCart);
        addToDb(product.id);
    }
    
    return (
        <div className='shop-container'>
            <div className="products-container">
                <div className='products'>
                {
                    products.map(product => <Product 
                        product={product} 
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
                </div>
            </div>
            <div className="card-container">
                <Cart cart={cart}></Cart>
               
            </div>
        </div>
    );
};

export default Shop;