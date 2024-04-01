import React from 'react'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import Title from '../../components/Title/Title'
import css from './HomePage.module.css'

interface HomePageProps {
	// Оголошення пропсів компонента
}

const HomePage: React.FC<HomePageProps> = props => {
	// Вміст компонента

	return (
		<>
			{/* <Header /> */}
			{/* <MainWrapper> */}
			<Container>
				<section className={css.hero}>
					<div className={css.heroContentWrapper}>
						<div className={css.heroTextBg}>
							<div className={css.heroTitle}>
								<Title size={'large'}>Онлайн бібліотека</Title>
							</div>
							<p className={css.schoolText}>Виноградівська ЗОШ Ⅰ-Ⅲ №1</p>
							<div className={css.heroBtn}>
								<Button>РОЗПОЧАТИ</Button>
							</div>
						</div>
					</div>
				</section>
			</Container>
			{/* </MainWrapper> */}
		</>
	)
}

export default HomePage
