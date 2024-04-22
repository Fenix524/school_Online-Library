import express from 'express'
import {
	createBook,
	deleteBook,
	getAllBooks,
	getOneBook,
	updateBook,
} from '../controllers/booksController.js'
import validateBody from '../helpers/validateBody.js'
import { createBookSchema } from '../schemas/bookSchemas.js'

const booksRouter = express.Router()

booksRouter.get('/', getAllBooks)
booksRouter.get('/:id', getOneBook)
booksRouter.delete('/:id', deleteBook)
booksRouter.post('/', validateBody(createBookSchema), createBook)
booksRouter.put('/:id', updateBook)

export default booksRouter
