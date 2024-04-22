import Joi from 'joi'
import { Role } from '../constants/userRoles.js'

export const createUserSchema = Joi.object({
	firstName: Joi.string().required().messages({
		'string.base': 'Імя повинно бути рядком',
		'string.empty': 'Імя обовязкове для заповнення',
		'any.required': 'Імя обовязкове для заповнення',
	}),
	lastName: Joi.string().required().messages({
		'string.base': 'Прізвище повинно бути рядком',
		'string.empty': 'Прізвище обовязкове для заповнення',
		'any.required': 'Прізвище обовязкове для заповнення',
	}),
	email: Joi.string().email().required().messages({
		'string.base': 'Email повинен бути рядком',
		'string.empty': 'Email обовязковий для заповнення',
		'string.email': 'Email повинен бути дійсною адресою електронної пошти',
		'any.required': 'Email обовязковий для заповнення',
	}),
	hashPassword: Joi.string().required().messages({
		'string.base': 'Пароль повинен бути рядком',
		'string.empty': 'Пароль обовязковий для заповнення',
		'any.required': 'Пароль обовязковий для заповнення',
	}),
	role: Joi.string()
		.valid(...Object.values(Role))
		.optional()
		.messages({
			'any.only': 'Неприпустима роль',
			'any.required': 'Роль обовязкова для заповнення',
		}),
	dateOfBirth: Joi.date().optional().messages({
		'date.base': 'Неприпустимий формат дати',
		'any.required': 'Дата народження обовязкова для заповнення',
	}),
	profilePictureUrl: Joi.string().uri().optional().messages({
		'string.uri': 'Недійсний URL профільного зображення',
	}),
})
