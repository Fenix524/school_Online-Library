import express from 'express'
import {
	createGenre,
	deleteGenre,
	getAllGenres,
	getGenreById,
	updateGenre,
} from '../controllers/genreController.js'

const genreRouter = express.Router()

genreRouter.get('/', getAllGenres)
genreRouter.post('/', createGenre)
genreRouter.get('/:id', getGenreById)
genreRouter.put('/:id', updateGenre)
genreRouter.delete('/:id', deleteGenre)

export default genreRouter
