const { Router } = require('express')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
//alternatively... 
//app.use(bodyParser.json())

mongoose
   .connect(process.env.DB,
      {
         useNewUrlParser: true,  
         useUnifiedTopology: true,
         useFindAndModify:false
     })
   .then(()=>{
        console.log('connected to MongoDB')
      })
   .catch(err=>console.log(err))

app.use('/test', require('./routes/r1'))
   
app.listen(3000, ()=>{
   console.log('listening on 3000')
})