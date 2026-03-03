import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsAPI } from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productsAPI.getById(id)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div style={{textAlign: 'center', padding: '4rem'}}>Chargement...</div>;
  }

  if (!product) {
    return <div style={{textAlign: 'center', padding: '4rem'}}>Produit non trouvé</div>;
  }

  return (
    <div className="product-detail">
      <button onClick={() => navigate('/products')} style={{marginBottom: '2rem', background: '#6b7280'}}>
        ← Retour aux produits
      </button>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start'}}>
        <div className="product-image" style={{height: '400px', borderRadius: '12px', fontSize: '5rem'}}>📦</div>
        <div>
          <h1>{product.name}</h1>
          <div className="price">{product.price} €</div>
          <div className="stock">✓ En stock: {product.stock} unités</div>
          <p className="description">{product.description}</p>
          <button className="btn btn-secondary" style={{marginTop: '2rem'}}>🛒 Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
