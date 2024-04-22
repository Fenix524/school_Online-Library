import express from 'express'
import {
	createBookCopy,
	getAllBookCopies,
	getBookCopyById,
	updateBookCopy,
	deleteBookCopy,
} from '../controllers/bookCopyController.js'
import validateBody from '../helpers/validateBody.js'
import { createBookCopySchema } from '../schemas/bookCopySchemas.js'

const bookCopiesRouter = express.Router()

bookCopiesRouter.get('/', getAllBookCopies)
bookCopiesRouter.get('/:id', getBookCopyById)
bookCopiesRouter.delete('/:id', deleteBookCopy)
bookCopiesRouter.post('/', createBookCopy)
bookCopiesRouter.put('/:id', updateBookCopy)

export default bookCopiesRouter
