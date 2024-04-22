import Joi from 'joi'

// Схема для моделі BookCopy
export const createBookCopySchema = Joi.object({
	copyId: Joi.string().required(),
	bookId: Joi.string().required(),
	userId: Joi.string().optional(),
	issuedDate: Joi.date().optional(), // Додане поле для дати видання
	dueDate: Joi.date().optional(), // Додане поле для дати повернення
})
