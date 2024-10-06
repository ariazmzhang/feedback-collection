// index.js - starting point of the server

const express = require('express'); // CommonJS modules
// const mongoose = require('mongoose');
// const cookieSession = require('cookie-session');
// require('./models/User');
require('./services/passport');

// mongoose.connect(keys.mongoURI);

// app object is used to set up configuration 
// that listens for incoming requests 
// that are being routed to different route handlers
const app = express(); 


app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey]
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

require('./routes/authRoutes')(app);

// look at the underlying environment and see if it has a port defined for us - dynamic port binding
const PORT = process.env.PORT || 3000;
app.listen(PORT);
