const express = require('express');
const cors = require('cors');
const { portfolioData } = require('./data/portfolioData');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send(JSON.stringify({
    message: 'Welcome to the my-portfolio public API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      profile: '/api/profile',
      about: '/api/about',
      projects: '/api/projects',
      skills: '/api/skills',
      experience: '/api/experience',
      contact: '/api/contact'
    }
  }, null, 2));
});

app.get('/api', (req, res) => {
  res.json({
    message: 'Portfolio API is running',
    version: '1.0.0',
    endpoints: ['/', '/api/health', '/api/profile', '/api/about', '/api/skills', '/api/projects', '/api/contact']
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'my-portfolio-api',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/profile', (req, res) => {
  res.json(portfolioData.profile);
});

app.get('/api/about', (req, res) => {
  res.json(portfolioData.about);
});

app.get('/api/skills', (req, res) => {
  res.json(portfolioData.skills);
});

app.get('/api/projects', (req, res) => {
  res.json({
    count: portfolioData.projects.length,
    projects: portfolioData.projects
  });
});

app.get('/api/contact', (req, res) => {
  res.json(portfolioData.contact);
});

app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found',
    path: req.originalUrl
  });
});

module.exports = app;
