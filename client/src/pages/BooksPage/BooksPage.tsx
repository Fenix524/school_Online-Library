import React from 'react'
import BookItemList from '../../components/BookItemList/BookItemList'
import Container from '../../components/Container/Container'
import FilterBar from '../../components/FilterBar/FilterBar'
import Title from '../../components/Title/Title'
import { booksArray } from '../../util/booksDB'
import css from './BooksPage.module.css'

interface BooksPageProps {
	// Оголошення пропсів компонента
}

// You can use the 'booksArray' for testing or any other purpose.

const BooksPage: React.FC<BooksPageProps> = props => {
	console.log(booksArray)

	return (
		<>
			<Container>
				<div className={css.wrapper}>
					<div className={css.title}>
						<Title>Книги</Title>
					</div>
					<FilterBar />
					<div className={css.list}>
						<BookItemList books={booksArray} />F
					</div>
				</div>
			</Container>
		</>
	)
}

export default BooksPage
