import React from 'react'
import { bookType } from '../../types/types'
import BookItem from '../BookItem/BookItem'
import css from './BookItemList.module.css'

interface BookItemListProps {
	books: bookType[]
}

const BookItemList: React.FC<BookItemListProps> = ({ books }) => {
	// Вміст компонента

	return (
		<ul className={css.bookItemList}>
			{books.map(book => {
				return (
					<div className={css.wrapper}>
						<BookItem book={book} />
					</div>
				)
			})}
		</ul>
	)
}

export default BookItemList
