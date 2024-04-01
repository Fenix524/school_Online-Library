import React, { useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import BookItemList from '../../components/BookItemList/BookItemList'
import Button from '../../components/Button/Button'
import ChangeFormMini from '../../components/ChangeFormMini/ChangeFormMini'
import Container from '../../components/Container/Container'
import Title from '../../components/Title/Title'
import { setIsLoggedIn } from '../../redux/auth/auth.slice'
import { selectUser } from '../../redux/auth/authSelectors'
import { booksArray } from '../../util/booksDB'
import css from './ProfilePage.module.css'

interface ProfilePageProps {
	// Оголошення пропсів компонента
}

const ProfilePage: React.FC<ProfilePageProps> = props => {
	const dispatch = useDispatch()
	const curentUser = useSelector(selectUser)

	const [showMiniForm, setShowMiniForm] = useState(true)

	type infoType = {
		key: string
		nameColumn: string
		value: string
	}

	// Вміст компонента
	const userInformations: infoType[] = [
		{ key: 'firstName', nameColumn: 'Імя', value: curentUser.firstName },
		{ key: 'lastName', nameColumn: 'Прізвище', value: curentUser.lastName },
		{ key: 'email', nameColumn: 'Пошта', value: curentUser.email },
		{
			key: 'class',
			nameColumn: 'Клас',
			value: curentUser.class?.toString ? curentUser.class.toString() : '',
		},
	]

	return (
		<div className={css.wrapper}>
			<Container>
				<div className={css.leftSide}>
					<img src={curentUser.img} alt='User logo' className={css.userLogo} />
					<ul className={css.userInfoList}>
						{userInformations.map(inf => (
							<li className={css.userInfoItem}>
								<div className={css.userInfoItemTextPart}>
									<span className={css.itemTitle}>{inf.nameColumn + ':'}</span>
									<p className={css.itemInfo}>{inf.value}</p>
								</div>
								<button
									className={css.itemChangeBtn}
									onClick={() => {
										// const newUser: User = {
										// 	...curentUser,
										// 	[inf.key]: inf.value,
										// }
										// console.log(inf.key, inf.value)
									}}
								>
									<FaPencilAlt size={15} />
								</button>
							</li>
						))}
					</ul>
					<div className={css.navButtonsBox}>
						<Button
							style='transparent'
							onClick={() => {
								dispatch(setIsLoggedIn(false))
							}}
						>
							Вийти з профілю
						</Button>
						<Button style='transparent'>Видалити профіль</Button>
					</div>
				</div>
				<div className={css.rightSide}>
					<Title>Твої книги</Title>
					<div className={css.bookList}>
						<BookItemList books={booksArray} />
					</div>
				</div>
			</Container>
			{showMiniForm && <ChangeFormMini />}
		</div>
		// </MainWrapper>
	)
}

export default ProfilePage
