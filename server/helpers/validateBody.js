import HttpError from './HttpError.js'

const validateBody = schema => {
	const func = (req, res, next) => {
		const { error } = schema.validate(req.body)
		if (error) {
			console.log(error)
			next(res.status(400).json(error))
		}
		next()
	}

	return func
}

export default validateBody
