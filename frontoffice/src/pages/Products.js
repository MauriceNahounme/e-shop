import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productsAPI } from '../services/api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productsAPI.getAll()
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{textAlign: 'center', padding: '4rem'}}>Chargement...</div>;
  }

  return (
    <div>
      <h1 style={{marginBottom: '2rem', fontSize: '2.5rem'}}>Nos Produits</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">📦</div>
            <div className="product-content">
              <h3>{product.name}</h3>
              <p style={{color: '#6b7280', fontSize: '0.9rem', marginTop: '0.5rem'}}>
                {product.description?.substring(0, 80)}...
              </p>
              <div className="product-price">{product.price} €</div>
              <Link to={`/products/${product.id}`}>
                <button className="btn">Voir détails</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
