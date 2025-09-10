const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.post('/api/auth/login', (req, res) => {
  res.json({ token: 'fake-jwt' });
});

app.get('/api/tms/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../mock-data/tms-stats.json'));
});

app.get('/api/tms/shipments', (req, res) => {
  res.sendFile(path.join(__dirname, '../mock-data/tms-shipments.json'));
});

app.get('/api/epos/sales', (req, res) => {
  res.sendFile(path.join(__dirname, '../mock-data/epos-sales.json'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
