import { model, Schema } from 'mongoose'
import { Role } from '../constants/userRoles.js'

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			validate: {
				validator: value => /\S+@\S+\.\S+/.test(value),
				message: 'Invalid email address',
			},
		},
		hashPassword: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: Object.values(Role),
			default: Role.USER,
		},
		dateOfBirth: {
			type: String,
			default: null,
		},
		profilePictureUrl: {
			type: String,
			default: null,
		},
	},
	{
		timestamps: true,
	}
)

export const User = model('User', userSchema)
