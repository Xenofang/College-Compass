# 🎓 College Compass

A full-stack web app to discover, filter, and compare colleges — built with React (Vite) on the frontend and Express/MongoDB on the backend.

**🔗 Live App:** [https://clgcompass.vercel.app/](https://clgcompass.vercel.app/)

---

## ✨ Features

- 🔍 **Browse Colleges** — view a searchable, filterable list of colleges
- ⚖️ **Compare Colleges** — side-by-side comparison of multiple colleges
- 🔐 **Authentication** — JWT-based signup/login
- 👤 **User Profile** — view and update your profile
- 🛡️ **Protected Routes** — profile and other authenticated pages are gated behind login

## 🛠️ Tech Stack

**Frontend**
- React 19 + Vite
- React Router DOM
- Tailwind CSS
- Axios
- Lucide React (icons)

**Backend**
- Node.js + Express 5
- MongoDB + Mongoose
- JWT (`jsonwebtoken`) for auth
- bcryptjs for password hashing
- CORS, dotenv

**Deployment**
- Frontend: Vercel
- Backend: Render

## 📁 Project Structure

```
College-Compass/
├── frontend/               # React + Vite app
│   ├── src/
│   │   ├── api/            # Axios instance & API calls
│   │   ├── pages/          # Home, Login, SignUp, Colleges, Compare, Profile
│   │   │   └── component/  # Navbar, Footer, ProtectedRoute, Shared
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── backend/                 # Express + MongoDB API
    ├── config/db.js         # MongoDB connection
    ├── controller/          # auth & user controllers
    ├── middleware/          # JWT auth middleware
    ├── models/               # User & College schemas
    ├── routes/               # /auth and /user routes
    └── server.js
```

## 🔌 API Endpoints

| Method | Endpoint         | Description                  | Auth Required |
|--------|------------------|-------------------------------|----------------|
| GET    | `/`              | Health check                 | No             |
| GET    | `/colleges`      | Get all colleges             | No             |
| POST   | `/auth/register` | Register a new user          | No             |
| POST   | `/auth/login`    | Login and receive JWT token  | No             |
| GET    | `/auth/user`     | Get logged-in user info      | Yes            |
| GET    | `/user/profile`  | Get user profile             | Yes            |
| PUT    | `/user/profile`  | Update user profile          | Yes            |

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB Atlas connection string (or local MongoDB)

### 1. Clone the repo
```bash
git clone https://github.com/Xenofang/College-Compass.git
cd College-Compass
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Run the backend:
```bash
npm run dev
```
Server runs on `http://localhost:5000`

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:5173` (default Vite port)

> **Note:** The frontend's API base URL automatically switches between `localhost:5000` (local dev) and the deployed Render backend based on hostname — see `frontend/src/api/axios.js`.

## 📦 Deployment

- **Frontend** is deployed on [Vercel](https://vercel.com) → [clgcompass.vercel.app](https://clgcompass.vercel.app/)
- **Backend** is deployed on [Render](https://render.com), with `MONGO_URI` and `JWT_SECRET` configured as environment variables on the Render dashboard.

## 👤 Author

**Xenofang**
[GitHub Profile](https://github.com/Xenofang)

## 📄 License

This project currently has no license specified.
