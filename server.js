const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('./config/passport');
const mongodb = require('./db/connect');

const app = express();
const port = process.env.PORT || 8080;

app.enable('trust proxy');

// CORS
app.use(cors({
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true
}));

app.use(bodyParser.json());

// Session
app.use(session({
  secret: process.env.SESSION_SECRET || 'fallback_secret_for_testing',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    maxAge: 24 * 60 * 60 * 1000,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
  }
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', require('./routes'));

// Welcome Route
app.get('/', (req, res) => {
  res.json({
    message: "EduTrack Africa API is running successfully!",
    version: "1.0",
    documentation: "/api-docs",
    login: "/auth/google"
  });
});

// Export app for Jest tests
module.exports = app;

// Start server ONLY when run directly (not imported by tests)
if (require.main === module) {
  mongodb.initDb((err) => {
    if (err) {
      console.error("MongoDB Connection Error:", err);
    } else {
      app.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
    }
  });
}