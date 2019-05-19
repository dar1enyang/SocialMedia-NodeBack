const express = require('express');
const app = express();
const morgan = require('morgan');
// bring in routes
const postRoutes = require('./routes/post');
// import mongoose
const mongoose = require('mongoose');
// load env variables
const dotenv = require('dotenv');
dotenv.config()
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')


// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);
//


//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

//
const port = 8080;
app.listen(port, () => {
    console.log(`A Node Js API is listening on port: ${port}`)
});
