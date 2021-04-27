const config = require('config')
const express = require('express');  // imports express 
const cors = require('cors'); // imports cors
const mongoose = require('mongoose');  //imports mongoose

require('dotenv').config();   // imports dotenv

const app= express();        // creating an express app
const port= process.env.PORT || 5000;   // defining the port as being 5000

app.use(cors());                    // our app uses cors
app.use(express.json());            // and uses express.json

if (!config.get('jwtPrivateKey')){
  console.error('FATAL ERROR: jwtPrivateKey is not defined')
  process.exit(1)
}

try{
    mongoose.connect('mongodb://localhost:27017/eventHub',{ useUnifiedTopology: true , useNewUrlParser: true , useCreateIndex : true}, function (err, db) {
      if (err) throw err
      else console.log("connected")

    })
  }catch(err){
    console.log(err);
    process.exit(1);
  }

const usersRouter = require('./routes/users')           //defining the users route which is /users
const authRouter = require('./routes/auth')
const evenementRouter = require('./routes/evenement')
const lieuRouter = require('./routes/lieu')

app.use('/api/users',usersRouter)               //and our users route
app.use('/api/auth',authRouter)

app.use('/api/evenement',evenementRouter)     
app.use('/api/lieu',lieuRouter)   

app.listen(port, () => {            //specifiying at which port the app listens 
    console.log("server is running on port :",port)
})

//To run the server we need to type :nodemon server in the console
// branch development
// added hedi branch 
// pushing to heroku