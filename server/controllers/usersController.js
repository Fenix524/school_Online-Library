import { userService } from '../services/usersService.js'
import { asyncWrapper } from '../helpers/asyncWrapper.js'
import bookCopyService from '../services/bookCopyService.js'
import HttpError from '../helpers/HttpError.js'
import { BookCopy } from '../models/bookCopyModel.js'
import { Book } from '../models/bookModel.js'

import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { User } from '../models/userModel.js'
import { createCRUDHandler } from './CRUD.js'
import { CRUDOpertion } from '../constants/CRUDOperations.js'
import { SECRET } from '../config.js'

export const getAllUsers = createCRUDHandler(User, CRUDOpertion.GET_ALL, '', [
	'firstName',
	'lastName',
])
export const getUserById = createCRUDHandler(User, CRUDOpertion.GET_BY_ID)
export const createUser = createCRUDHandler(User, CRUDOpertion.CREATE)
export const updateUser = createCRUDHandler(User, CRUDOpertion.UPDATE)
export const deleteUser = createCRUDHandler(User, CRUDOpertion.DELETE)

// export const updateUser = asyncWrapper(async (req, res, next) => {
// 	const { id } = req.params
// 	const user = await User.findByIdAndUpdate(id, req.body)
// 	res.json({ user })
// })

export const getUserBooks = asyncWrapper(async (req, res, next) => {
	const { id } = req.params
	const books = await BookCopy.find({ userId: id })
		.populate('userId')
		.populate('bookId')
		.exec()

	if (!books || !books.length) {
		next(HttpError(404, 'Books not found for this user'))
		return
	}

	res.json(books)
})

// Авторизація користувача
export const loginUser = async (req, res, next) => {
	const { email, password } = req.body
	const user = await User.findOne({ email })

	if (!user) {
		return next(HttpError(404, 'User not found'))
	}

	// Перевірка пароля
	const isPasswordValid = await bcrypt.compare(password, user.hashPassword)

	if (!isPasswordValid) {
		return res.status(401).json({ message: 'Invalid password' })
	}

	// Створення JWT-токена
	const token = jwt.sign({ userId: user._id }, SECRET)

	res.json({ user, token })
}

// Реєстрація нового користувача
export const registerUser = async (req, res, next) => {
	const user = req.body
	const password = user.hashPassword

	console.log(user.email)
	const isExist = await User.exists({ email: user.email })

	if (isExist) {
		return next(HttpError(400, 'The user already exists'))
	}

	try {
		// Хешування пароля
		const hashedPassword = await bcrypt.hash(password, 10)
		// Створення нового користувача
		const newUser = await User.create({
			...user,
			hashPassword: hashedPassword,
		})

		// Створення JWT-токена
		const token = jwt.sign({ userId: newUser._id }, SECRET)

		res.status(201).json({ user: newUser, token })
	} catch (error) {
		next(error)
		console.log(error)
	}
}

export const getMe = async (req, res, next) => {
	try {
		console.log(req.userId)
		res.json({
			message: 'succes',
			userId: req.userId,
		})
	} catch (error) {
		console.log(error)
		res.json({ message: 'error' })
	}
}
