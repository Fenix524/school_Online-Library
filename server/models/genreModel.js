import { model, Schema } from 'mongoose'

const genreSchema = new Schema({
	genreName: {
		type: String,
		required: true,
		unique: true,
	},
})

export const Genre = model('Genre', genreSchema)
