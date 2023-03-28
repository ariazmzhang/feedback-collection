const express = require("express");
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24* 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());  

//call the function with app parameter
require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT);



console.log(`Server Running at port ${PORT}  CNTL-C to quit`)
console.log(`To Test:`)
console.log(`Open several browsers to: http://localhost:${PORT}`)
console.log(`Open several browsers to: http://localhost:${PORT}/auth/google`)
console.log(`Open several browsers to: http://localhost:${PORT}/api/current_user`)