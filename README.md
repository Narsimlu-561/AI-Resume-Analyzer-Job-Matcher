# 🚀 AI Resume Analyzer & Job Matcher

An AI-powered full-stack web application that analyzes resumes, extracts skills dynamically, and recommends suitable IT job roles.

---
# 🌐 Live Demo  
🔗 [Click here to view the website](https://ai-resume-analyzer-job-matcher-1.onrender.com/login)

---

## 📌 Features

### 🔐 User Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes

### 📄 Resume Management
- Upload Resume (PDF)
- Store resumes in database
- View uploaded resumes
- Delete resumes

### 🧠 AI Resume Analysis
- Extract resume text
- Identify key skills dynamically
- Generate ATS resume score
- Suggest improvements

### 🎯 Job Matching
- Skill-based job recommendations
- Domain-based job detection
- Intelligent job matching algorithm

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### AI / Processing
- Natural Language Processing (NLP)
- OpenAI API (optional)

### Authentication
- JWT (JSON Web Token)
- bcrypt.js

### Deployment
- Render (Full-stack hosting)
- MongoDB Atlas (Database)

---

## 📂 Project Structure

```
AI-Resume-Analyzer-Job-Matcher/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   └── utils/
│   ├── dist/
│   └── index.html
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/AI-Resume-Analyzer-Job-Matcher.git
cd AI-Resume-Analyzer-Job-Matcher
```

---

## 🔧 Backend Setup

```
cd backend
npm install
```

Create `.env` file inside `backend/`:

```
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_api_key (optional)
FRONTEND_URL=http://localhost:5173
```

Run backend:

```
npm run dev
```

Backend runs on:
```
http://localhost:5000
```

---

## 💻 Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

---

## 🚀 Build for Production

```
cd frontend
npm run build
```

This generates the `dist/` folder used by backend.

---

## 🌐 Deployment

- Backend deployed on **Render**
- Frontend served via backend (`dist/`)
- Database hosted on **MongoDB Atlas**

---

## 🔗 API Endpoints

### 🔐 Auth
```
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/profile
```

### 📄 Resume
```
POST   /api/resume/upload
GET    /api/resume
GET    /api/resume/:id
DELETE /api/resume/:id
```

### 🤖 AI
```
POST /api/ai/analyze
GET  /api/ai/jobs/:resumeId
```

---

## 📊 ATS Scoring System

Resume score is calculated based on:

- Skills extraction
- Keyword relevance
- Projects & experience
- Education
- Resume formatting

---

## 🧠 How It Works

1. Resume is uploaded and parsed  
2. Text is cleaned and processed  
3. Skills are dynamically extracted  
4. Domain is detected (Data / Dev / Cloud etc.)  
5. Matching job roles are recommended  

---

## 🔒 Environment Variables

```
MONGO_URI=
JWT_SECRET=
PORT=
OPENAI_API_KEY=
NODE_ENV=
FRONTEND_URL=
```

---

## 📸 Screenshots

- Dashboard  
- Resume Analysis  
- Job Recommendations  

(Add screenshots here)

---

## 📈 Future Improvements

- Advanced AI resume parsing
- Improved job matching accuracy
- Resume feedback system
- Data visualizations (charts)
- Multi-language support

---

## 👨‍💻 Author

**Narsimlu Dasari**

- GitHub: https://github.com/Narsimlu-561  
- LinkedIn: (Add your profile)

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
