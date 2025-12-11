const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const SERVICE_NAME = 'service5';
const VERSION = process.env.VERSION || '1.0.0';

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: SERVICE_NAME,
    version: VERSION,
    timestamp: new Date().toISOString()
  });
});

// Ready check endpoint
app.get('/ready', (req, res) => {
  res.json({ ready: true });
});

// Main endpoint
app.get('/', (req, res) => {
  res.json({
    message: `Welcome to ${SERVICE_NAME}`,
    version: VERSION,
    description: 'Order processing microservice for the TechCorp e-commerce platform. Handles order creation, status tracking, and fulfillment integration.'
  });
});

// API endpoints
app.get('/api/v1/status', (req, res) => {
  res.json({
    service: SERVICE_NAME,
    status: 'running',
    uptime: process.uptime()
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`${SERVICE_NAME} listening on port ${PORT}`);
});
