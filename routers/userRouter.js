const express = require('express')
const userController = require('../controller/user')
const authmiddleware = require('../middleware/authMiddleware')
const authMiddleware = require('../middleware/authMiddleware')

const userRouter = express.Router()

userRouter.post('/signup', userController.signUp)
userRouter.post('/signin', userController.signIn)
userRouter.post('/resetPwd', userController.resetPwd)
userRouter.post('/enterNewPwd', userController.enterNewPwd)
userRouter.get('/getuser', authMiddleware.verifyToken, userController.getUser)

module.exports = userRouter;