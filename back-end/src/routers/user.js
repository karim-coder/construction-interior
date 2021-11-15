const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.post('/userinfo', async(req, res)=>{
    try{
        
        const user = new User(req.body)
        await user.save().then(()=>{
            res.send('Thank you for respons')
        }).catch((e)=>{
            res.send(e)
        })

    } catch(e){
        res.status(404).send(e)
    }
})

router.get('/data', async (req, res)=>{
    try{
        const user = await User.find({})
        res.send(user)
    } catch(e){
        res.send(e)
    }
})

module.exports = router