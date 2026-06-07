// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const session = require('express-session');
// const passport = require('./config/passport');
// const mongodb = require('./db/connect');

// const port = process.env.PORT || 8080;
// const app = express();

// app.use(cors({
//   origin: '*',                    
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
//   credentials: true
// }));

// // Session
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false,
//   cookie: { maxAge: 24 * 60 * 60 * 1000 }
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(bodyParser.json());

// // Routes
// app.use('/', require('./routes'));

// // Welcome Route
// app.get('/', (req, res) => {
//   res.json({
//     message: "EduTrack Africa API is running successfully!",
//     version: "1.0",
//     documentation: "/api-docs",
//     login: "/auth/google"
//   });
// });

// mongodb.initDb((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     app.listen(port, () => {
//       console.log(`Server running on port ${port}`);
//     });
//   }
// });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('./config/passport');
const mongodb = require('./db/connect');

const port = process.env.PORT || 8080;
const app = express();

app.enable('trust proxy');

app.use(cors({
  origin: true, 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true
}));

app.use(bodyParser.json());


app.use(session({
  secret: process.env.SESSION_SECRET,
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

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
});