const mongoose = require('mongoose')

const database = mongoose.connect("mongodb://127.0.0.1:27017/Construction", ()=>{
    console.log('Connected to the database successfully!!')
})