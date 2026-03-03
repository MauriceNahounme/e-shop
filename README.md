# E-Commerce Platform

Plateforme e-commerce complète avec architecture microservices, comprenant un frontend React et un backend Node.js/Express avec PostgreSQL et Redis.

## 📋 Table des matières

- [Technologies](#technologies)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)


## 🛠️ Technologies

### Frontend
- React 18.2.0
- React Router DOM 6.20.0
- Axios 1.6.0
- Nginx

### Backend
- Node.js / Express 5.2.1
- PostgreSQL 17 (Alpine)
- Redis 8 (Alpine)
- JWT (jsonwebtoken)
- Bcrypt pour le hashing des mots de passe

## 📦 Prérequis

- Docker (version 20.10+)
- Docker Compose (version 3.6+)
- Git

## 🚀 Installation

### 1. Cloner le projet

```bash
git clone <repository-url>
cd ecommerce
```

### 2. Configurer les secrets

Créez les fichiers de secrets dans le dossier `secrets/` :

```bash
# Mot de passe PostgreSQL
echo "votre_mot_de_passe_db" > secrets/db.txt

# Mot de passe Redis
echo "votre_mot_de_passe_redis" > secrets/redis.txt
```

### 3. Configurer les variables d'environnement

#### Fichier `.env` (racine du projet)

```env
DB_NAME=ecommerce_db
DB_USER=postgres
```

#### Fichier `backoffice/.env`

```env
PORT=
DB_HOST=
DB_PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=
REDIS_HOST=
REDIS_PORT=
REDIS_PASSWORD=
JWT_SECRET=
```

#### Fichier `frontoffice/.env`

```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 4. Lancer l'application

```bash
docker-compose up -d
```

### 5. Vérifier le statut

```bash
docker-compose ps
```

## ⚙️ Configuration

### Ports exposés

- **Frontend** : http://localhost:8080
- **Backend API** : http://localhost:5000

### Volumes Docker

- `db_data` : Persistance des données PostgreSQL

## 💻 Utilisation

### Démarrer les services

```bash
docker-compose up -d
```

### Arrêter les services

```bash
docker-compose down
```

### Voir les logs

```bash
# Tous les services
docker-compose logs -f

# Service spécifique
docker-compose logs -f backoffice
docker-compose logs -f frontoffice
```

### Reconstruire les images

```bash
docker-compose up -d --build
```

### Accéder à la base de données

```bash
docker exec -it postgres_db psql -U postgres -d ecommerce_db
```

### Accéder à Redis CLI

```bash
docker exec -it redis_server redis-cli
AUTH votre_mot_de_passe_redis
```

## 📁 Structure du projet

```
ecommerce/
├── backoffice/                 # Backend API
│   ├── config/                 # Configuration DB et Redis
│   │   ├── db.js
│   │   └── redis.js
│   ├── controllers/            # Contrôleurs
│   │   ├── authController.js
│   │   ├── orderController.js
│   │   ├── productController.js
│   │   └── userController.js
│   ├── models/                 # Modèles de données
│   │   ├── Order.js
│   │   ├── Product.js
│   │   └── User.js
│   ├── routes/                 # Routes API
│   │   ├── auth.js
│   │   ├── orders.js
│   │   ├── products.js
│   │   └── users.js
│   ├── .env
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
├── frontoffice/                # Frontend React
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/         # Composants React
│   │   ├── context/            # Context API
│   │   ├── pages/              # Pages
│   │   ├── services/           # Services API
│   │   ├── App.js
│   │   └── index.js
│   ├── .env
│   ├── Dockerfile
│   ├── nginx.conf
│   └── package.json
├── secrets/                    # Secrets Docker
│   ├── db.txt
│   └── redis.txt
├── .env
├── .gitignore
├── docker-compose.yml
└── README.md
```

## 🐛 Dépannage

### Le frontend ne se connecte pas au backend

Vérifiez que `REACT_APP_API_URL` dans `frontoffice/.env` pointe vers la bonne URL.

### Erreur de connexion PostgreSQL

Vérifiez que le service `postgres_db` est en bonne santé :
```bash
docker-compose ps
docker-compose logs postgres_db
```

### Erreur de connexion Redis

Vérifiez que le mot de passe Redis est correct dans `backoffice/.env` et `secrets/redis.txt`.

## 👤 Auteur

Maurice Nahounme

## 📄 Licence

ISC
