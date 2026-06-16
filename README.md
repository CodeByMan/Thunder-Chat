<div align="center">

# 🐾 PetBuddy — Pet Care & Clinic

A modern full-stack pet care, clinic, adoption, and pet shop platform built with the **MERN stack**. PetBuddy connects pet owners, veterinarians, shelters, and administrators through role-based dashboards, appointment management, pet health records, adoption workflows, product shopping, reviews, and AI-powered pet-care guidance.

![MERN](https://img.shields.io/badge/Stack-MERN-16a34a?style=for-the-badge)
![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61dafb?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-111827?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-10b981?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-f97316?style=for-the-badge)

</div>

---

## 📌 Project Overview

**PetBuddy** is a full-stack MERN pet-care and clinic management system designed for pet owners, veterinarians, shelters, and admins. The platform provides a centralized digital experience for managing pets, medical records, vet appointments, treatment logs, adoption requests, pet-care content, products, cart operations, reviews, notifications, and AI-based pet-care feedback.

---

## ✨ Premium Features

- 🔐 **JWT authentication** with protected frontend routes and cookie support
- 👥 **Role-based dashboards** for owner, vet, shelter, and admin users
- 🐶 **Pet profile management** with owner-based pet records
- 🩺 **Health record management** with image gallery upload support
- 📄 **PDF health record download** using PDFKit
- 📅 **Appointment booking and management** for pet owners and veterinarians
- 🧾 **Treatment log system** for pet medical follow-ups
- 🏥 **Veterinarian profile and appointment modules**
- 🏡 **Shelter adoption module** with adoptable pet listings
- 📨 **Adoption request workflow** for adopters and shelters
- 🛒 **Pet product shop** with product listings, product details, cart, and reviews
- ⭐ **Review and rating system** for products
- 🔔 **Notification module** with read/delete support
- 🤖 **AI pet-care feedback assistant** powered by Google Gemini API
- 🖼️ **Image upload support** using Multer and ImageKit
- 📧 **Email notification support** using Nodemailer
- 📱 **Responsive React/Vite frontend** with modern pet-care UI
- 🌙 **Dark-mode compatible homepage UI improvements**
- ✅ **Clean frontend lint status** after update

---

## 🖼️ Screenshots


| Home |
|------|
| ![Home](docs/screenshots/homepage.png) |

| Login | Dashboard |
|--------------|--------------|
| ![Login](docs/screenshots/login.png) | ![Pet Profiles](docs/screenshots/dashboard.png) |

| Blog Page | AI Pet Chat Assistant |
|-----------------|------------------|
| ![AI Pet Assistant](docs/screenshots/blog.png) | ![AI Pet Assistant](docs/screenshots/chatai.png) |

---

## 🧰 Tech Stack

### Frontend

- React 18
- Vite 5
- React Router DOM
- React Context API
- Axios
- Bootstrap 5
- Custom CSS template styling
- AOS animations
- WOW.js animations
- Swiper
- React Slick
- React Responsive Carousel
- React Toastify
- React Icons
- React Select
- QRCode React
- Yet Another React Lightbox

### Backend

- Node.js
- Express.js 5
- MongoDB
- Mongoose
- JSON Web Token authentication
- Cookie Parser
- bcrypt
- Multer uploads
- ImageKit media hosting
- Nodemailer email service
- Google Gemini API integration
- PDFKit PDF generation
- dotenv environment configuration
- CORS

---

## 👤 User Roles

| Role | Description |
| --- | --- |
| **Pet Owner** | Manages pets, health records, appointments, cart, adoption requests, and AI pet-care help |
| **Veterinarian** | Manages vet profile, appointments, pet medical history, and treatment logs |
| **Shelter** | Manages adoptable pets, pet-care content/status, and adoption requests |
| **Admin** | Manages users, products, pets, vets, and platform-level dashboard data |

---

## 📁 Folder Structure

```bash
PetBuddy-Clinic/
├── backend/
│   ├── index.js
│   ├── package.json
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── Middlwares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── Utils/
│   └── .env.example
│
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── vercel.json
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── Context/
│   │   ├── layouts/
│   │   ├── lib/
│   │   ├── pages/
│   │   │   ├── adminPages/
│   │   │   ├── adoptablepages/
│   │   │   ├── appointments/
│   │   │   ├── cart/
│   │   │   ├── health-records/
│   │   │   ├── login/
│   │   │   ├── pet-care/
│   │   │   ├── pet-medical-history/
│   │   │   ├── pet-profiles/
│   │   │   ├── petchatbot/
│   │   │   ├── product/
│   │   │   ├── profile/
│   │   │   └── signup/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── .env.example
│
├── docs/
│   └── screenshots/
├── .gitignore
├── LICENSE
└── README.md
```

---

## ⚙️ Environment Variables

### Backend `.env`

Create a `.env` file inside the `backend` folder:

```bash
cd backend
cp .env.example .env
```

Then update these values:

| Variable | Description |
| --- | --- |
| `PORT` | Backend server port, usually `8000` |
| `FRONTEND_URL` | Frontend URL, usually `http://localhost:5173` |
| `MONGO_DB_STRING` | MongoDB connection string |
| `JWT_SECRET` | Secret key for signing JWT tokens |
| `NODE_ENV` | App environment, for example `development` |
| `IMAGEKIT_PUBLIC_KEY` | ImageKit public key |
| `IMAGEKIT_PRIVATE_KEY` | ImageKit private key |
| `GEMINI_API_KEY` | Google Gemini API key for AI feedback |
| `EMAIL_USER` | Email address used by Nodemailer |
| `EMAIL_PASS` | Email app password or SMTP password |

Example:

```env
PORT=8000
FRONTEND_URL=http://localhost:5173
MONGO_DB_STRING=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/PetBuddy
JWT_SECRET=your_super_secret_jwt_key
NODE_ENV=development
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
GEMINI_API_KEY=your_gemini_api_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

### Frontend `.env`

Create a `.env` file inside the `frontend` folder:

```bash
cd frontend
cp .env.example .env
```

Then update:

```env
VITE_API_BASE_URL=http://localhost:8000
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/petbuddy-clinic.git
cd petbuddy-clinic
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Configure backend environment

```bash
cp .env.example .env
```

Update `.env` with your MongoDB URI, JWT secret, ImageKit keys, Gemini API key, frontend URL, and email credentials.

### 4. Start the backend server

```bash
npx nodemon index.js
```

Or run with Node:

```bash
node index.js
```

Backend runs by default at:

```bash
http://localhost:8000
```

### 5. Install frontend dependencies

Open a new terminal:

```bash
cd frontend
npm install
```

### 6. Configure frontend environment

```bash
cp .env.example .env
```

Update:

```env
VITE_API_BASE_URL=http://localhost:8000
```

### 7. Start the frontend development server

```bash
npm run dev
```

Frontend runs by default at:

```bash
http://localhost:5173
```

---

## 📜 Available Scripts

### Backend

| Command | Description |
| --- | --- |
| `npx nodemon index.js` | Start backend in development mode |
| `node index.js` | Start backend with Node.js |

### Frontend

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## 🔗 API Modules

The backend is organized into route modules:

| Module | Base Route |
| --- | --- |
| Authentication | `/auth` |
| Users | `/user` |
| Pets | `/pets` |
| Health Records | `/health` |
| Products | `/product` |
| Cart | `/cart` |
| Reviews & Ratings | `/reviews-rating` |
| Veterinarians | `/vet` |
| Appointments | `/appointment` |
| Treatment Logs | `/treatment` |
| Adoptable Pets | `/adoptable` |
| Adoption Requests | `/adoption-request` |
| Care Content | `/care-content` |
| Notifications | `/notifications` |
| AI Feedback | `/ai` |

---


## 🧑‍💻 Author

**Muhammad Ali Nawaz**  
MERN Full-Stack Developer  

---

## 📄 License

This project is licensed under the [MIT license](LICENSE).

---

<p align="center">
  <b>⭐ If you like this project, consider starring the repository!</b>
</p>
