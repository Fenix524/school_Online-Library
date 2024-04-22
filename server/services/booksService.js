import { Book } from '../models/bookModel.js'

async function createBook(book) {
	const newBook = await Book.create(book)
	return newBook
}

async function getAllBooks() {
	const allBooks = await Book.find().populate('author').populate('genre').exec()
	return allBooks
}

async function getBookById(bookId) {
	const book = await Book.findById(bookId)
		.populate('author')
		.populate('genre')
		.exec()
	return book
}

async function updateBookById(bookId, updatedBook) {
	const updated = await Book.findByIdAndUpdate(bookId, updatedBook, {
		new: true,
	})
	return updated
}

async function deleteBookById(bookId) {
	const deleted = await Book.findByIdAndDelete(bookId)
	return deleted
}

async function bookIsExist(bookId) {
	const existingBook = Book.exists({ _id: bookId })
	return existingBook
}

export const bookService = {
	createBook,
	getAllBooks,
	getBookById,
	updateBookById,
	deleteBookById,
	bookIsExist,
}
