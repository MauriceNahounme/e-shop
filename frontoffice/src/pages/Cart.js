import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="cart-empty">
      <div style={{fontSize: '5rem', marginBottom: '1rem'}}>🛒</div>
      <h1>Votre panier est vide</h1>
      <p>Découvrez nos produits et ajoutez-les à votre panier</p>
      <Link to="/products">
        <button className="btn" style={{marginTop: '2rem', maxWidth: '300px'}}>Voir nos produits</button>
      </Link>
    </div>
  );
};

export default Cart;
