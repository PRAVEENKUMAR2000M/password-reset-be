//import express, cors
const express = require('express')
const cors = require('cors')

const userRouter = require('./routers/userRouter')
// const postsRouter = require('./routes/postsRouter')

//create new express app
const app = express()

// use the cors middleware
app.use(cors());

// use the express.json middleware
app.use(express.json());

//define the endpoints
app.use('/', userRouter)
// app.use('/posts', postsRouter)

//export the app
module.exports = app