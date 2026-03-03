import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <Link to="/" className="nav-brand">🛒 E-Shop</Link>
        <div className="nav-links">
          <Link to="/products">Produits</Link>
          <Link to="/cart">🛒 Panier</Link>
          {user ? (
            <>
              <span>Bonjour, {user.name}</span>
              <button onClick={logout}>Déconnexion</button>
            </>
          ) : (
            <>
              <Link to="/login">Connexion</Link>
              <Link to="/register">Inscription</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
