const { Router } = require('express')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
//alternatively... 
//app.use(bodyParser.json())

mongoose
   .connect('mongodb+srv://felixadmin:Five534135@clusterrl.kclxe.mongodb.net/test',
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