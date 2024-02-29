const express = require('express')
const userController = require('../controller/user')

const userRouter = express.Router()

userRouter.post('/signup', userController.signUp)
userRouter.post('/signin', userController.signIn)
userRouter.post('/resetPwd', userController.resetPwd)
userRouter.post('/enterNewPwd', userController.enterNewPwd)

module.exports = userRouter;