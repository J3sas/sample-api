const express = require('express')
const app = express()
const player = require('./data.json')


const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.get('/player',(req,res)=>{
    res.send(player)
})

app.listen(port,()=>{
    console.log(`App is listening to port ${port}`)
})