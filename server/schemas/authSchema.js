import Joi from 'joi'

export const authUserSchema = Joi.object({
	email: Joi.string().email().required().messages({
		'string.base': 'Email повинен бути рядком',
		'string.empty': "Email обов'язковий для заповнення",
		'string.email': 'Email повинен бути дійсною адресою електронної пошти',
		'any.required': "Email обов'язковий для заповнення",
	}),
	password: Joi.string().min(6).max(50).required().messages({
		'string.base': 'Пароль повинен бути рядком',
		'string.empty': "Пароль обов'язковий для заповнення",
		'string.min': 'Пароль повинен містити принаймні {#limit} символів',
		'string.max': 'Пароль повинен містити не більше {#limit} символів',
		'any.required': "Пароль обов'язковий для заповнення",
	}),
})

export const registerUserSchema = Joi.object({
	firstName: Joi.string().alphanum().min(3).max(30).required().messages({
		'string.base': "Ім'я повинно бути рядком",
		'string.empty': "Ім'я обов'язкове для заповнення",
		'string.min': "Ім'я повинно містити принаймні {#limit} символи",
		'string.max': "Ім'я повинно містити не більше {#limit} символів",
		'any.required': "Ім'я обов'язкове для заповнення",
	}),
	lastName: Joi.string().alphanum().min(3).max(30).required().messages({
		'string.base': 'Прізвище повинно бути рядком',
		'string.empty': "Прізвище обов'язкове для заповнення",
		'string.min': 'Прізвище повинно містити принаймні {#limit} символи',
		'string.max': 'Прізвище повинно містити не більше {#limit} символів',
		'any.required': "Прізвище обов'язкове для заповнення",
	}),
	email: Joi.string().email().required().messages({
		'string.base': 'Email повинен бути рядком',
		'string.empty': "Email обов'язковий для заповнення",
		'string.email': 'Email повинен бути дійсною адресою електронної пошти',
		'any.required': "Email обов'язковий для заповнення",
	}),
	password: Joi.string().min(6).max(50).required().messages({
		'string.base': 'Пароль повинен бути рядком',
		'string.empty': "Пароль обов'язковий для заповнення",
		'string.min': 'Пароль повинен містити принаймні {#limit} символів',
		'string.max': 'Пароль повинен містити не більше {#limit} символів',
		'any.required': "Пароль обов'язковий для заповнення",
	}),
})
