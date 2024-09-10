// index.js - starting point of the server

const express = require('express'); // CommonJS modules
// const mongoose = require('mongoose');
// const cookieSession = require('cookie-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
// require('./models/User');
// require('./services/passport');

// mongoose.connect(keys.mongoURI);

// app object is used to set up configuration 
// that listens for incoming requests 
// that are being routed to different route handlers
const app = express(); 

passport.use(
  new GoogleStrategy(
    {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      console.log('profile', profile);
    } 
  )
);

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.get(
  '/auth/google', 
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);
app.get('/auth/google/callback',
  passport.authenticate('google')
);
// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey]
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// require('./routes/authRoutes')(app);

// look at the underlying environment and see if it has a port defined for us - dynamic port binding
const PORT = process.env.PORT || 3000;
app.listen(PORT);
