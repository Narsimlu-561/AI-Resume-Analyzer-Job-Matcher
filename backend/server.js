const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotenv.config();

console.log("ENV CHECK:", process.env.MONGO_URI);

// ===== CREATE UPLOAD FOLDER =====
const uploadsDir = path.join(__dirname, 'uploads', 'resumes');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// ===== IMPORTS =====
const connectDB = require('./config/db');
const { errorHandler, notFound } = require('./middleware/errorMiddleware');

// ===== CONNECT DB =====
connectDB();

const app = express();

// ===== CORS =====
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true,
}));

// ===== BODY PARSER =====
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===== STATIC FILES =====
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ===== API ROUTES =====
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/resume', require('./routes/resumeRoutes'));
app.use('/api/ai', require('./routes/aiRoutes'));

// ===== HEALTH CHECK =====
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'AI Resume Analyzer API is running' });
});

// ===== SERVE FRONTEND (IMPORTANT FIX FOR EXPRESS 5) =====
app.use(express.static(path.join(__dirname, "dist")));

// 👇 DO NOT USE app.get("*") in Express 5
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// ===== ERROR HANDLING =====
app.use(notFound);
app.use(errorHandler);

// ===== START SERVER =====
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});