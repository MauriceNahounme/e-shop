import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authAPI } from '../services/api';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await authAPI.register(formData);
      setSuccess(true);
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError('Erreur lors de l\'inscription');
    }
  };

  return (
    <div className="auth-container">
      <h1>Inscription</h1>
      {error && <div style={{padding: '1rem', background: '#fee2e2', color: '#dc2626', borderRadius: '8px', marginBottom: '1rem'}}>{error}</div>}
      {success && <div style={{padding: '1rem', background: '#d1fae5', color: '#059669', borderRadius: '8px', marginBottom: '1rem'}}>Inscription réussie ! Redirection...</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom complet</label>
          <input
            type="text"
            placeholder="Jean Dupont"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="votre@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn">S'inscrire</button>
      </form>
      <p style={{textAlign: 'center', marginTop: '1.5rem', color: '#6b7280'}}>
        Déjà un compte ? <Link to="/login" style={{color: 'var(--primary)', fontWeight: '500'}}>Se connecter</Link>
      </p>
    </div>
  );
};

export default Register;
