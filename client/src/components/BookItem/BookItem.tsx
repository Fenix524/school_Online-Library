import clsx from 'clsx'
import React, { useState } from 'react'
import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { IoIosArrowDropdown } from 'react-icons/io'
import { useSelector } from 'react-redux'
import {
	selectIsLoggedIn,
	selectUserRole,
} from '../../redux/auth/authSelectors'
import { bookType } from '../../types/types'
import { role } from '../../util/enums'
import css from './BookItem.module.css'

interface BookItemProps {
	book: bookType
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
	// Вміст компонента
	const userRole = useSelector(selectUserRole)
	const isLogedIn = useSelector(selectIsLoggedIn)
	const [isOpen, setIsOpen] = useState(false)

	const btnClass = clsx({
		[css.open]: isOpen,
		[css.close]: !isOpen,
	})

	return (
		<>
			<ul className={css.book}>
				<li className={css.infoItem}>
					<span className={css.columnTitle}>Книга:</span>
					{book.bookName}
				</li>
				{userRole === role.Admin && isLogedIn && (
					<button className={css.change} onClick={() => {}}>
						<HiOutlinePencilSquare
							className={btnClass}
							size={35}
							color='#C2B8A9'
						/>
					</button>
				)}
				<button
					className={css.showMore}
					onClick={() => {
						setIsOpen(isOpen ? false : true)
						console.log(isOpen)
					}}
				>
					<IoIosArrowDropdown className={btnClass} size={35} color='#C2B8A9' />
				</button>
			</ul>
			{isOpen && (
				<div className={css.moreInfo}>
					<img
						src={
							book.bookImg ||
							'https://i.pinimg.com/originals/6e/80/89/6e80894b7a08ca96226531a62e17b8be.png'
						}
						alt='book'
						className={css.bookImg}
					/>
					<ul className={css.moreInfoList}>
						<li className={css.moreInfoItem}>
							<span className={css.columnTitle}>Книга:</span>
							{book.bookName}
						</li>

						<li className={css.moreInfoItem}>
							<span className={css.columnTitle}>Автор:</span>
							{book.bookAuthor || 'Не відомо'}
						</li>

						<li className={css.moreInfoItem}>
							<span className={css.columnTitle}>Кількість копій:</span>
							{`${book.idsBookCopies?.length || 'Немає в наявності'}`}
						</li>
					</ul>
				</div>
			)}
		</>
	)
}

export default BookItem
