import Joi from 'joi'

// Схема для моделі Book
export const createBookSchema = Joi.object({
	name: Joi.string().required().messages({
		'string.base': 'Назва книги повинна бути рядком',
		'string.empty': 'Назва книги не може бути порожньою',
	}),
	desc: Joi.string().messages({
		'string.base': 'Опис книги може бути рядком',
	}),
	author: Joi.string().required().messages({
		'string.base': 'ID автора книги повинен бути рядком',
		'string.empty': 'ID автора книги не може бути порожнім',
	}),
	year: Joi.number().integer().min(1900).max(2099).messages({
		'number.base': 'Рік публікації книги повинен бути числом',
		'number.integer': 'Рік публікації книги повинен бути цілим числом',
		'number.min': 'Рік публікації книги не може бути меншим за 1900',
		'number.max': 'Рік публікації книги не може бути більшим за 2099',
	}),
	ageRating: Joi.string()
		.valid(...['0+', '6+', '12+', '16+', '18+'])
		.messages({
			'string.base': 'Вікове обмеження книги повинно бути рядком',
			'string.empty': 'Вікове обмеження книги не може бути порожнім',
			'string.valid':
				'Вікове обмеження книги повинно бути одним з: 0+, 6+, 12+, 16+, 18+',
		}),
	genre: Joi.array().items(Joi.string()).required().min(1).max(3).messages({
		'array.base': 'Жанри книги повинні бути масивом',
		'array.min': 'Книга повинна мати принаймні 1 жанр',
		'array.max': 'Книга може мати максимум 3 жанри',
		'any.required': 'Жанри книги не можуть бути порожніми',
		'string.base': 'Жанр книги повинен бути рядком',
	}),
	imgUrl: Joi.string().uri().messages({
		'string.base': 'URL зображення книги повинен бути рядком',
		'string.uri': 'URL зображення книги повинен бути дійсним URL-адресою',
	}),
})
