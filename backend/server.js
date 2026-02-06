require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/todos');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'https://hackathonrepo-3fmq.onrender.com', 'https://hackathonrepo-1.onrender.com'],
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/todo-app')
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
    console.log('Server running without database connection...');
  });

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Todo API Server is running!' });
});

app.post('/api/analyze', (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  // Simulation Logic
  let score = 85;
  const riskDetails = [];
  const isHttps = url.startsWith('https://');

  if (!isHttps) {
    score -= 20;
    riskDetails.push({ type: 'warning', message: 'Not using HTTPS' });
  } else {
    riskDetails.push({ type: 'success', message: 'Valid SSL Certificate' });
  }

  const suspiciousKeywords = ['login', 'verify', 'account', 'update', 'secure', 'bank'];
  const foundKeywords = suspiciousKeywords.filter(kw => url.includes(kw));

  if (foundKeywords.length > 0) {
    score -= 30;
    riskDetails.push({ type: 'danger', message: `Suspicious keywords detected: ${foundKeywords.join(', ')}` });
  }

  if (url.length > 50) {
    score -= 10;
    riskDetails.push({ type: 'warning', message: 'Unusually long URL length' });
  }

  // Normalize score
  score = Math.max(0, Math.min(100, score));

  let riskLevel = 'Low';
  if (score < 50) riskLevel = 'Critical';
  else if (score < 80) riskLevel = 'Moderate';

  // Simulate processing delay
  setTimeout(() => {
    res.json({
      url,
      score,
      riskLevel,
      details: riskDetails,
      geo: 'United States (Simulated)',
      registrar: 'GoDaddy.com, LLC (Simulated)'
    });
  }, 1500);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
