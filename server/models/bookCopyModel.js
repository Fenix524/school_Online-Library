import { Schema, model } from 'mongoose'

const bookCopySchema = new Schema({
	copyId: { type: String, required: true, unique: true },
	bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
	userId: { type: Schema.Types.ObjectId, ref: 'User', default: null },
	issuedDate: { type: Date }, // Дата, коли книга видана користувачеві
	dueDate: { type: Date }, // Дата, до якої потрібно повернути книгу
})

export const BookCopy = model('BookCopy', bookCopySchema)
