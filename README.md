<div align="center">

# ⚡ ThunderChat — Real-Time Messaging App

A modern full-stack real-time chat application built with the **MERN stack**, **Next.js**, and **Socket.io**. ThunderChat provides secure authentication, profile setup, direct messaging, group channels, media/file sharing, live Socket.io communication, and a responsive dark chat interface.

![MERN](https://img.shields.io/badge/Stack-MERN-16a34a?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Frontend-Next.js%20%2B%20React-000000?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-111827?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-10b981?style=for-the-badge)
![Socket.io](https://img.shields.io/badge/Realtime-Socket.io-6366f1?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38bdf8?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-f97316?style=for-the-badge)

</div>

---

## 📌 Project Overview

**ThunderChat** is a full-stack real-time messaging platform designed for fast and secure communication. The application includes user authentication, profile customization, direct one-to-one messaging, group channel conversations, file upload support, contact search, and live message delivery using Socket.io.

---

## ✨ Premium Features

- 🔐 **JWT authentication** using secure HTTP-only cookie support
- 👤 **User signup and login** with validation and protected access
- 🧾 **Persistent user session** using `/api/auth/user-info`
- 🧑‍🎨 **Profile setup** with first name, last name, color selection, and profile image upload
- 💬 **Direct one-to-one messaging** between registered users
- 👥 **Group channel creation** and channel-based messaging
- ⚡ **Real-time communication** using Socket.io
- 📁 **File upload and sharing** in chat messages
- 🖼️ **Profile image upload/remove support** using Multer
- 🔎 **Search contacts** by email/name
- 📇 **DM contact list** with conversation history support
- 🧠 **Zustand state management** for lightweight frontend state
- 🎨 **Modern dark chat UI** with responsive layout
- 🔔 **Toast notifications** using Sonner
- 😀 **Emoji picker support** for richer conversations
- 🧩 **Radix UI components** for polished UI behavior
- 🌀 **Lottie animations** for auth and empty-chat screens
- 🚀 **Next.js App Router frontend** with same backend connectivity
- 🌐 **Next.js rewrites/proxy** for REST API and upload routes
- ✅ **Portfolio-ready MERN + Next.js architecture**

---

## 🖼️ Screenshots

| Login | Register |
|--------------|--------------|
| ![Login](docs/screenshots/login.png) | ![Register](docs/screenshots/register.png) |

| Homepage | Profile Setup |
|--------------|--------------|
| ![Chat Dashboard](docs/screenshots/landing.png) | ![Profile Setup](docs/screenshots/profile.png) |

| Chat Page | Group Channels |
|-----------------|------------------|
| ![Chat Page](docs/screenshots/chat.png) | ![Group Channels](docs/screenshots/channel.png) |

---

## 🧰 Tech Stack

### Frontend

- Next.js 16
- React 19
- Next.js App Router
- Tailwind CSS 4
- Zustand
- Axios
- Socket.io Client
- Radix UI
- Lucide React Icons
- Emoji Picker React
- Sonner Toasts
- Moment.js
- Lottie animations with `@lottiefiles/dotlottie-react`
- Styled Components
- Custom reusable UI components

### Backend

- Node.js
- Express.js 5
- MongoDB
- Mongoose
- Socket.io
- JSON Web Token authentication
- HTTP-only cookies
- Cookie Parser
- bcrypt password hashing
- Multer uploads
- dotenv environment configuration
- CORS

---

## 👤 User Flow

| Flow | Description |
| --- | --- |
| **Signup** | New users can create an account with email and password validation |
| **Login** | Existing users can securely log in using JWT cookie-based authentication |
| **Profile Setup** | Users complete their profile with name, theme color, and profile image |
| **Direct Chat** | Users can search contacts and start one-to-one conversations |
| **Channel Chat** | Users can create group channels and send real-time channel messages |
| **File Sharing** | Users can upload and share files inside conversations |
| **Logout** | Users can safely clear their session and return to auth screen |

---

## 📁 Folder Structure

```bash
Thunder-Chat/
├── backend/
│   ├── index.js
│   ├── package.json
│   ├── nodemon.json
│   ├── socket.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── channelController.js
│   │   ├── contactsController.js
│   │   └── messagesController.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── channelModel.js
│   │   ├── messageModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── authRoute.js
│   │   ├── channelRoute.js
│   │   ├── contactsRoute.js
│   │   └── messagesRoute.js
│   ├── uploads/
│   │   ├── profiles/
│   │   └── files/
│   └── .env.example
│
├── frontend/
│   ├── app/
│   │   ├── auth/
│   │   │   └── page.jsx
│   │   ├── chat/
│   │   │   └── page.jsx
│   │   ├── profile/
│   │   │   └── page.jsx
│   │   ├── icon.jpg
│   │   ├── layout.jsx
│   │   └── page.jsx
│   ├── public/
│   │   └── assets/
│   │       ├── authChatbot.lottie
│   │       ├── channel.lottie
│   │       ├── flash.lottie
│   │       ├── noChat.lottie
│   │       └── victory.svg
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   │   └── socketContext.jsx
│   │   ├── lib/
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   ├── chat/
│   │   │   └── profile/
│   │   ├── store/
│   │   ├── utils/
│   │   │   └── constant.js
│   │   └── index.css
│   ├── jsconfig.json
│   ├── next.config.mjs
│   ├── package.json
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
| `PORT` | Backend server port, usually `3000` |
| `MONGODB_URL` | MongoDB Atlas or local MongoDB connection string |
| `JWT_KEY` | Secret key for signing JWT tokens |
| `ORIGIN` | Frontend URL, usually `http://localhost:5173` |

Example:

```env
PORT=3000
MONGODB_URL=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/ThunderChat?retryWrites=true&w=majority
JWT_KEY=your_super_secret_jwt_key
ORIGIN=http://localhost:5173
```

### Frontend `.env.local`

Create a `.env.local` file inside the `frontend` folder:

```bash
cd frontend
cp .env.example .env.local
```

Then update:

```env
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
NEXT_PUBLIC_SOCKET_URL=http://localhost:3000
```

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SERVER_URL` | Backend URL used by Next.js rewrites/proxy |
| `NEXT_PUBLIC_SOCKET_URL` | Socket.io backend URL used by browser client |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/thunderchat-nextjs-mern-realtime-chat.git
cd thunderchat-nextjs-mern-realtime-chat
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

Update `.env` with your MongoDB URI, JWT key, backend port, and frontend origin.

### 4. Create upload folders

```bash
mkdir -p uploads/profiles uploads/files
```

For Windows CMD:

```cmd
mkdir uploads
mkdir uploads\profiles
mkdir uploads\files
```

### 5. Start the backend server

```bash
npm run dev
```

Backend runs by default at:

```bash
http://localhost:3000
```

### 6. Install frontend dependencies

Open a new terminal:

```bash
cd frontend
npm install
```

### 7. Configure frontend environment

```bash
cp .env.example .env.local
```

Update:

```env
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
NEXT_PUBLIC_SOCKET_URL=http://localhost:3000
```

### 8. Start the Next.js frontend

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
| `npm run dev` | Start backend in development mode with Nodemon |
| `npm start` | Start backend with Node.js |
| `npm test` | Placeholder test command |

### Frontend

| Command | Description |
| --- | --- |
| `npm run dev` | Start Next.js development server on port `5173` |
| `npm run build` | Create production build |
| `npm start` | Start production Next.js server on port `5173` |
| `npm run lint` | Run ESLint |

---

## 🔗 API Modules

The backend is organized into route modules:

| Module | Base Route | Description |
| --- | --- | --- |
| Authentication | `/api/auth` | Signup, login, logout, profile setup, user info, profile image |
| Contacts | `/api/contacts` | Search contacts and fetch DM contact lists |
| Messages | `/api/messages` | Fetch direct messages and upload chat files |
| Channels | `/api/channel` | Create channels, fetch user channels, and load channel messages |
| Uploads | `/uploads/profiles`, `/uploads/files` | Static profile images and uploaded chat files |
| Socket.io | `/socket.io` | Real-time direct and channel messaging |

---

## 🔐 Authentication Routes

| Method | Route | Description |
| --- | --- | --- |
| `POST` | `/api/auth/signup` | Register a new user |
| `POST` | `/api/auth/login` | Login user and set JWT cookie |
| `GET` | `/api/auth/user-info` | Get logged-in user details |
| `POST` | `/api/auth/update-profile` | Update user profile |
| `POST` | `/api/auth/add-profile-image` | Upload profile image |
| `DELETE` | `/api/auth/remove-profile-image` | Remove profile image |
| `POST` | `/api/auth/logout` | Logout user and clear cookie |

---

## 💬 Chat & Channel Routes

| Method | Route | Description |
| --- | --- | --- |
| `POST` | `/api/contacts/search` | Search registered contacts |
| `GET` | `/api/contacts/get-contacts-for-dm` | Get direct message contact list |
| `GET` | `/api/contacts/get-all-contacts` | Get all contacts for channel creation |
| `POST` | `/api/messages/get-messages` | Get one-to-one chat messages |
| `POST` | `/api/messages/upload-file` | Upload and send a file |
| `POST` | `/api/channel/create-channel` | Create a group channel |
| `GET` | `/api/channel/get-user-channels` | Get channels of logged-in user |
| `GET` | `/api/channel/get-channel-messages/:channelId` | Get messages for a specific channel |

---

## ⚡ Socket.io Events

| Event | Description |
| --- | --- |
| `sendMessage` | Sends a direct message to another user |
| `recieveMessage` | Receives a direct message in real time |
| `send-channel-message` | Sends a message to a channel |
| `recieve-channel-message` | Receives a channel message in real time |

---

## 🧪 Quick Test Flow

1. Start backend on `http://localhost:3000`
2. Start frontend on `http://localhost:5173`
3. Create two user accounts
4. Complete profile setup for both users
5. Search the second user from the first account
6. Send a direct message
7. Open the second account in another browser/incognito window
8. Confirm real-time message delivery
9. Create a group channel
10. Send a channel message and test live updates

---

## 🧑‍💻 Author

**Muhammad Ali Nawaz**  
MERN Stack Developer

GitHub: [@muhmdan](https://github.com/muhmdan)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  <b>⭐ If you like this project, consider starring the repository!</b>
</p>
