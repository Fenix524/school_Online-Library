import { role } from '../util/enums'

export type bookType = {
	bookId: string
	idsBookCopies?: string[]
	bookName: string
	bookAuthor?: string
	bookImg?: string
}
export type User = {
	firstName: string
	lastName: string
	email: string
	img?: string
	class?: {
		number: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
		letter: 'A' | 'Б' | 'В' | 'Г' | 'Д'
		startYear: number
		toString?: () => string
	}
	role?: role.Admin | role.User
}
