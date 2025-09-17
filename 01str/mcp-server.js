// MCP Server for role-based access
const express = require('express');
const app = express();
app.use(express.json());

// Example users (replace with DB in production)
const users = {
  'student1': { role: 'student', prn: 'xyz', password: 'pass1' },
  'gfm1': { role: 'gfm', password: 'pass2' },
  'admin1': { role: 'admin', password: 'pass3' },
  'account1': { role: 'account', password: 'pass4' }
};

// Simple auth middleware (replace with JWT in production)
function auth(req, res, next) {
  const { userid, password } = req.headers;
  if (!userid || !password || !users[userid] || users[userid].password !== password) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  req.user = users[userid];
  req.userid = userid;
  next();
}

// Role check middleware
function permit(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  };
}

// PRN info endpoint
app.post('/prn', auth, (req, res) => {
  const { prn } = req.body;
  if (req.user.role === 'student') {
    // Student can only access their own PRN
    if (prn !== req.user.prn) {
      return res.status(403).json({ error: 'Access denied' });
    }
    return res.json({ prn, info: 'Student PRN info for ' + prn });
  }
  // Other roles can access any PRN
  return res.json({ prn, info: 'PRN info for ' + prn });
});

// GFM section endpoint
app.post('/gfm', auth, permit('gfm', 'admin'), (req, res) => {
  res.json({ info: 'GFM section data' });
});

// Admin section endpoint
app.post('/admin', auth, permit('admin'), (req, res) => {
  res.json({ info: 'Admin section data' });
});

// Account section endpoint
app.post('/account', auth, permit('account', 'admin'), (req, res) => {
  res.json({ info: 'Account section data' });
});

// Example: connect your chatbot by sending HTTP POST requests to these endpoints
// with headers: userid, password, and body as needed.

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`MCP server running on port ${PORT}`);
});
