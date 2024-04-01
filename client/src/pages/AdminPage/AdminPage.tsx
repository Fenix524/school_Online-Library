import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import BookItemList from '../../components/BookItemList/BookItemList'
import Button from '../../components/Button/Button'
import FilterBar from '../../components/FilterBar/FilterBar'
import Title from '../../components/Title/Title'
import './AdminPage.module.css'
import css from './AdminPage.module.css'
import { booksArray } from '../../util/booksDB'

interface AdminPageProps {
	// Оголошення пропсів компонента
}

const AdminPage: React.FC<AdminPageProps> = props => {
	// Вміст компонента

	return (
		<>
			{/* <Header /> */}
			{/* <MainWrapper> */}
			<div className={css.wrapper}>
				<div className={css.navSide}>
					<div className={css.title}>
						<Title size='small'>Панель керуання</Title>
					</div>
					<ul className={css.navList}>
						<li className={css.navItem}># Книги</li>
						<li className={css.navItem}># Учні </li>
						<li className={css.navItem}># Електронні книги</li>
						<li className={css.navItem}># Жанри книг </li>
						<li className={css.navItem}># Автори книг</li>
					</ul>
				</div>
				<div className={css.mainSide}>
					<div className={css.filterBar}>
						<FilterBar />
						<div className={css.addBookBtn}>
							<Button style='transparent'>
								<p>Нова книга </p>
								<FaPlus />
							</Button>
						</div>
					</div>
					<div className={css.bookListWrapper}>
						<BookItemList books={booksArray} />
					</div>
				</div>
			</div>
			{/* </MainWrapper> */}
		</>
	)
}

export default AdminPage
