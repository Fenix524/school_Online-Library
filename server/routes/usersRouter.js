import express from 'express'
import {
	createUser,
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser,
	getUserBooks,
	loginUser,
	registerUser,
	getMe,
} from '../controllers/usersController.js'
import validateBody from '../helpers/validateBody.js'
import { createUserSchema } from '../schemas/userSchemas.js'
import { checkAuth } from '../middlewares/usersMiddlewares.js'

const usersRouter = express.Router()

//users
usersRouter.get('/', getAllUsers)
usersRouter.get('/:id', getUserById)
usersRouter.delete('/:id', deleteUser)
usersRouter.post('/', validateBody(createUserSchema), createUser)
usersRouter.put('/:id', updateUser)
usersRouter.get('/:id/books', getUserBooks)

export default usersRouter
