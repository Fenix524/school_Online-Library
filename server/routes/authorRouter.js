import express from 'express'
import validateBody from '../helpers/validateBody.js'
import { checkAuth } from '../middlewares/usersMiddlewares.js'
import { authUserSchema } from '../schemas/authSchema.js'
import { createUserSchema } from '../schemas/userSchemas.js'
import {
	createAuthor,
	deleteAuthor,
	getAllAuthors,
	getAuthorById,
	updateAuthor,
} from '../controllers/authorController.js'

const authorRouter = express.Router()

authorRouter.get('/', getAllAuthors)
authorRouter.post('/', createAuthor)
authorRouter.get('/:id', getAuthorById)
authorRouter.put('/:id', updateAuthor)
authorRouter.delete('/:id', deleteAuthor)

export default authorRouter
