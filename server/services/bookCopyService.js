import { BookCopy } from '../models/bookCopyModel.js'

async function createBookCopy(book) {
	const newBook = await BookCopy.create(book)
	return newBook
}

async function getAllBookCopies() {
	const allBooks = await BookCopy.find()
		.populate('userId')
		.populate('bookId')
		.exec()
	return allBooks
}

async function getBookCopyById(bookId) {
	const book = await BookCopy.find({ copyId: bookId })
		.populate('userId')
		.populate('bookId')
		.exec()
	return book
}

async function updateBookCopyById(copyId, updatedBook) {
	const updated = await BookCopy.findOneAndUpdate(
		{ copyId: copyId }, // Умова пошуку
		updatedBook, // Оновлені дані
		{ new: true } // Опція, щоб повернути оновлений документ
	)
	return updated
}

async function deleteBookCopyById(bookId) {
	const deleted = await BookCopy.findOneAndDelete({ copyId: bookId })
	return deleted
}

export default {
	createBookCopy,
	getAllBookCopies,
	getBookCopyById,
	updateBookCopyById,
	deleteBookCopyById,
}
