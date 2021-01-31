const express = require('express')
const router = express.Router()
const dataModel = require('../models/testmodel')

router.get('/', (req, res)=>{
   res.send('this is the test route')
})

router.get('/second', (req, res)=>{
   res.send('this is the second test route')
})

router.post('/newpost', (req, res)=>{
   console.log(req.body)
   dataModel.create({
      name:req.body.name,
      description:req.body.description
   })
   .then(()=>{
      console.log('succesfully created new dataModel')
      res.send('success')
   })
   .catch(err=>console.log(err))
})


module.exports = router;
