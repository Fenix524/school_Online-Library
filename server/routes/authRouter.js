import express from 'express'
import {
	loginUser,
	registerUser,
	getMe,
} from '../controllers/usersController.js'
import validateBody from '../helpers/validateBody.js'
import { checkAuth } from '../middlewares/usersMiddlewares.js'
import { authUserSchema } from '../schemas/authSchema.js'
import { createUserSchema } from '../schemas/userSchemas.js'

const authRouter = express.Router()

authRouter.post('/login', validateBody(authUserSchema), loginUser)
authRouter.post('/register', validateBody(createUserSchema), registerUser)
authRouter.get('/me', checkAuth, getMe)

export default authRouter
