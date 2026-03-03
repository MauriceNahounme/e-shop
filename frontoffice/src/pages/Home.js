import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="hero">
        <h1>Bienvenue sur E-Shop</h1>
        <p>Découvrez nos produits de qualité à prix imbattables</p>
        <Link to="/products">
          <button className="btn" style={{marginTop: '2rem', maxWidth: '300px'}}>Voir nos produits</button>
        </Link>
      </div>
      <div style={{textAlign: 'center'}}>
        <h2 style={{marginBottom: '1rem'}}>Pourquoi nous choisir ?</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
          <div style={{padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow)'}}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🚚</div>
            <h3>Livraison rapide</h3>
            <p style={{color: '#6b7280', marginTop: '0.5rem'}}>Livraison en 48h</p>
          </div>
          <div style={{padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow)'}}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💳</div>
            <h3>Paiement sécurisé</h3>
            <p style={{color: '#6b7280', marginTop: '0.5rem'}}>Transactions protégées</p>
          </div>
          <div style={{padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow)'}}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🎁</div>
            <h3>Garantie qualité</h3>
            <p style={{color: '#6b7280', marginTop: '0.5rem'}}>Satisfait ou remboursé</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
