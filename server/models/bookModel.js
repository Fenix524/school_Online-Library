import { model, Schema } from 'mongoose'
import { BookGenres } from '../constants/BookGenres.js'

const bookSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		default: 'Немає',
		required: false,
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'Author',
	},
	year: Number,
	ageRating: {
		type: String,
		enum: ['0+', '6+', '12+', '16+', '18+'],
	},
	genre: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Genre',
		},
	],
	imgUrl: {
		type: String,
	},
})

export const Book = model('Book', bookSchema)
