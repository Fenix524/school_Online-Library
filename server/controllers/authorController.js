import { CRUDOpertion } from '../constants/CRUDOperations.js'
import { Author } from '../models/authorModel.js'
import { createCRUDHandler } from './CRUD.js'

export const getAllAuthors = createCRUDHandler(
	Author,
	CRUDOpertion.GET_ALL,
	'',
	['fullName']
)
export const getAuthorById = createCRUDHandler(Author, CRUDOpertion.GET_BY_ID)
export const createAuthor = createCRUDHandler(Author, CRUDOpertion.CREATE)
export const updateAuthor = createCRUDHandler(Author, CRUDOpertion.UPDATE)
export const deleteAuthor = createCRUDHandler(Author, CRUDOpertion.DELETE)
