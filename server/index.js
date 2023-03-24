const express = require("express");
const mongoose = require('mongoose');

require('./services/passport');

mongoose.connect();

const app = express();

//call the function with app parameter
require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT);



console.log(`Server Running at port ${PORT}  CNTL-C to quit`)
console.log(`To Test:`)
console.log(`Open several browsers to: http://localhost:${PORT}`)
console.log(`Open several browsers to: http://localhost:${PORT}/auth/google`)