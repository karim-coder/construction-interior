 const express = require('express')
 require('../src/db/mongoose')
const cors = require('cors')
const path = require('path')
 const app = express()

 const userRout = require('../src/routers/user')

 app.use(cors())
 app.use(express.urlencoded({ extended: false }));
 app.use(express.json());
 app.use(userRout)

 const port = process.env.PORT | 3001


console.log(path.join(__dirname))
 app.get('/home', cors(), (req, res)=>{
     res.send('Cors test')
     
 })
 

 app.listen(port, ()=>{
     console.log('Server is upto prot ' + port)
 })