import { CRUDOpertion } from '../constants/CRUDOperations.js'
import { createCRUDHandler } from './CRUD.js'
import { Genre } from '../models/genreModel.js'

export const getAllGenres = createCRUDHandler(Genre, CRUDOpertion.GET_ALL, '', [
	'genreName',
])
export const getGenreById = createCRUDHandler(Genre, CRUDOpertion.GET_BY_ID)
export const createGenre = createCRUDHandler(Genre, CRUDOpertion.CREATE)
export const updateGenre = createCRUDHandler(Genre, CRUDOpertion.UPDATE)
export const deleteGenre = createCRUDHandler(Genre, CRUDOpertion.DELETE)
