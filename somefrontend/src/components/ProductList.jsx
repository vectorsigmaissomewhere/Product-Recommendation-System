import React, { useState, useEffect } from 'react';
import '../styles/productlist.scss';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
    const [products, setProductList] = useState([]);  
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/products/')
            .then((response) => {
                setProductList(response.data.all_products); 
            })
            .catch((err) => {
                console.log('Error fetching products:', err);
            });
    }, []);

    return (
        <div className="main-container">
            <h2 className="text-center">Our Products</h2>
            {products.map((product) => (
                <div key={product.id} className="main-container-firstinner" onClick={()=>navigate(`/product/${product.id}`)}>
                    <div className="main-container-firstinner-img">
                        <img src={product.product_image} alt={product.name} />
                    </div>
                    <div className="main-container-firstinner-description">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <div className="main-container-firstinner-extra">
                            <h2>Price: ₹{product.price}</h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
