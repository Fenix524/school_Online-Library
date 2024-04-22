import jwt from 'jsonwebtoken'
import HttpError from '../helpers/HttpError.js'

import { userService } from '../services/usersService.js'
import { Role } from '../constants/userRoles.js'
import { SECRET } from '../config.js'

export function checkAuth(req, res, next) {
	const token = (req.headers.authorization || '').split(' ')[1]
	console.log(req.headers)
	console.log('token', token)

	if (!token) {
		next(HttpError(400, 'Where is token bitch'))
		return
	}

	try {
		const decoded = jwt.verify(token, SECRET)
		req.userId = decoded.userId
		return next()
	} catch (error) {
		return next(HttpError(403))
	}
}

export function checkIsAdmin(req, res, next) {
	const user = userService.getUserById(req.userId)

	if (!user) {
		return next(HttpError(404))
	}

	if (user.role !== Role.ADMIN) {
		return next(HttpError(403))
	}

	next()
}
