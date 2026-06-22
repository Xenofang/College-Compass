# College Compass 🎓

College Compass is a full-stack MERN web application that helps students discover, compare, and save colleges in one place. The platform is designed to simplify the college search process by providing detailed college information, comparison tools, and personalized user accounts.

## 🚀 Features

* User Authentication (Register/Login)
* JWT-Based Secure Authentication
* Protected Routes
* Student Profile Dashboard
* College Listings
* Search and Filter Colleges
* Save Favorite Colleges
* Compare Colleges
* Responsive UI
* MongoDB Database Integration

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* Lucide React

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcrypt.js
* dotenv

## 📂 Project Structure

```bash
College-Compass/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Xenofang/College-Compass.git
cd College-Compass
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start Backend Server:

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 🔑 API Endpoints

### Authentication

#### Register

```http
POST /api/auth/register
```

#### Login

```http
POST /api/auth/login
```

#### Profile

```http
GET /api/auth/profile
```

Requires JWT Token.

## 📸 Screenshots

Add screenshots of:

* Home Page
* Login Page
* Register Page
* Profile Page
* College Listings
* Compare Colleges

## 🌟 Future Enhancements

* College Predictor Tool
* AI-Based College Recommendations
* Reviews and Ratings
* College Discussion Forum
* Scholarship Recommendations
* Admission Deadline Tracker

## 👨‍💻 Developer

**Shubham Mandal**

BCA Student | MERN Stack Developer

GitHub: https://github.com/Xenofang

## 📄 License

This project is licensed under the MIT License.
