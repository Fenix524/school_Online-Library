import bookCopyService from '../services/bookCopyService.js'
import { asyncWrapper } from '../helpers/asyncWrapper.js'
import { userService } from '../services/usersService.js'
import { bookService } from '../services/booksService.js'
import HttpError from '../helpers/HttpError.js'
import { createCRUDHandler } from './CRUD.js'
import { BookCopy } from '../models/bookCopyModel.js'
import { CRUDOpertion } from '../constants/CRUDOperations.js'

export const createBookCopy = asyncWrapper(async (req, res, next) => {
	const book = req.body
	const { bookId, userId } = book

	console.log({ bookId, userId })
	const user = await userService.getUserById(userId)
	if (userId && !user) {
		next(HttpError(404, 'Користувач з таким ід відсутній'))
		return
	}

	const bookIsExist = await bookService.bookIsExist(bookId)
	if (!bookIsExist) {
		next(HttpError(404, 'Книга з таким ід відсутня'))
		return
	}

	const newBookCopy = await bookCopyService.createBookCopy(book)

	res.status(201).json(newBookCopy)
})

export const getAllBookCopies = createCRUDHandler(
	BookCopy,
	CRUDOpertion.GET_ALL,
	'',
	['copyId'],
	['userId', 'bookId']
)
// export const getAllBookCopies = asyncWrapper(async (req, res, next) => {
// 	const bookCopies = await bookCopyService.getAllBookCopies()
// 	res.json(bookCopies)
// })

export const getBookCopyById = asyncWrapper(async (req, res, next) => {
	const { id } = req.params
	const bookCopy = await bookCopyService.getBookCopyById(id)
	if (!bookCopy) {
		res.status(404).json({ message: 'Book copy not found' })
		return
	}
	res.json(bookCopy)
})

// export const updateBookCopy = asyncWrapper(async (req, res, next) => {
// 	const { id } = req.params
// 	const updatedBookCopy = req.body
// 	const bookCopy = await bookCopyService.getBookCopyById(id)
// 	console.log('BOOOOOOOOOOOOOOOOOOOOOOK', bookCopy)
// 	if (!bookCopy) {
// 		res.status(404).json({ message: 'Book copy not found' })
// 		return
// 	}
// 	const updated = await bookCopyService.updateBookCopyById(id, updatedBookCopy)
// 	res.json(updated)
// })
export const updateBookCopy = createCRUDHandler(
	BookCopy,
	CRUDOpertion.UPDATE,
	'copyId'
)

export const deleteBookCopy = asyncWrapper(async (req, res, next) => {
	const { id } = req.params
	const deletedBookCopy = await bookCopyService.deleteBookCopyById(id)
	if (!deletedBookCopy) {
		res.status(404).json({ message: 'Book copy not found' })
		return
	}
	res.json({ message: 'Book copy deleted successfully' })
})
