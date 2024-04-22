import { model, Schema } from 'mongoose'

const authorSchema = new Schema({
	fullName: {
		type: String,
		required: true,
		unique: true,
	},
	alias: String,
	dateOfBirth: String,
	biography: String,
})

export const Author = model('Author', authorSchema)
