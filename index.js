const express = require('express')
const app = express()
const mongoose = require("mongoose");
const player = require('./data.json')
const User = require('./nwd-user-schema')

const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.get('/player',(req,res)=>{
    res.send(player)
})


app.get('/:id',getUserId,(req,res)=>{
    res.json(res.user)
})

async function getUserId(req,res,next){
    let user
    try {
        user = await User.findById(req.params.id)
        if (user == null) {
            return res.status(404).json({message : 'Cannot find user'})
        }
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
    res.user = user
    next()
}


mongoose.connect('mongodb+srv://chill:chill123@cluster0.emcuc.mongodb.net/ChillDB?retryWrites=true&w=majority')
.then(()=> app.listen(port,()=>{
    console.log(`App is listening to port ${port}`)
}),
e=>console.log(`error`,e))

