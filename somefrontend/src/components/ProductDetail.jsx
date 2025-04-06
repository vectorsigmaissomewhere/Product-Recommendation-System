import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/productdetail.scss';

const ProductDetail = () => {
    const { productId } = useParams(); 
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [suggestedProducts, setSuggestedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      if (!productId || isNaN(productId)) {
        setError("Invalid product ID");
        setLoading(false);
        return;
      }
  
      setLoading(true);
      axios
        .get(`http://127.0.0.1:8000/productdetail/${productId}/`)
        .then((response) => {
          if (response.data.product) {
            setProduct(response.data.product);
          } else {
            setError("Product not found");
          }
  
          const similar = Array.isArray(response.data.similar_products)
            ? response.data.similar_products
            : [];
          setSuggestedProducts(similar);
  
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching product details:", err);
          setError("Failed to load product details");
          setLoading(false);
        });
    }, [productId]);
  
    if (loading) return <p className="loading-text">Loading product details...</p>;
    if (error) return <p className="error-text">{error}</p>;
  
    return (
      <div className="product-detail-container">
        <div className="product-detail">
          <h2 className="product-title">{product?.name}</h2>
          <img className="product-image" src={product?.product_image} alt={product?.name} />
          <p className="product-description">{product?.description}</p>
          <p className="product-price">Price: ₹{product?.price}</p>
        </div>
  
        <h3 className="suggested-products-title">Suggested Products</h3>
        <div className="suggested-products">
          {suggestedProducts.length > 0 ? (
            suggestedProducts.map((suggested) => (
              <div
                key={suggested.id}
                className="suggested-product"
                onClick={() => navigate(`/product/${suggested.id}`)}
              >
                <h4 className="suggested-product-name">{suggested.name}</h4>
                <img
                  className="suggested-product-image"
                  src={suggested.product_image}
                  alt={suggested.name}
                />
                <p className="suggested-product-price">Price: ₹{suggested.price}</p>
              </div>
            ))
          ) : (
            <p>No suggested products available.</p>
          )}
        </div>
      </div>
    );
  };
  
  export default ProductDetail;