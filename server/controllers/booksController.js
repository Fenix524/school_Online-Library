import { bookService } from '../services/booksService.js'
import { asyncWrapper } from '../helpers/asyncWrapper.js'
import { createCRUDHandler } from './CRUD.js'
import { Book } from '../models/bookModel.js'
import { CRUDOpertion } from '../constants/CRUDOperations.js'

export const getAllBooks = createCRUDHandler(
	Book,
	CRUDOpertion.GET_ALL,
	'',
	['name'],
	['author', 'genre']
)
// export const getAllBooks = asyncWrapper(async (req, res, next) => {
// 	const books = await bookService.getAllBooks()
// 	res.json(books)
// })

export const getOneBook = asyncWrapper(async (req, res, next) => {
	const { id } = req.params
	const book = await bookService.getBookById(id)

	if (!book) {
		res.status(404).json({ message: 'Book not found' })
		return
	}
	res.json(book)
})

export const deleteBook = asyncWrapper(async (req, res, next) => {
	const { id } = req.params
	const deletedBook = await bookService.deleteBookById(id)
	if (!deletedBook) {
		res.status(404).json({ message: 'Book not found' })
		return
	}
	res.json({ message: 'Book deleted successfully' })
})

export const createBook = asyncWrapper(async (req, res, next) => {
	const book = req.body
	const newBook = await bookService.createBook(book)
	res.status(201).json(newBook)
})

export const updateBook = asyncWrapper(async (req, res, next) => {
	const { id } = req.params
	const updatedBook = req.body
	const book = await bookService.getBookById(id)
	if (!book) {
		res.status(404).json({ message: 'Book not found' })
		return
	}
	const updated = await bookService.updateBookById(id, updatedBook)
	res.json(updated)
})
