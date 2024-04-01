import React from 'react'
import MainWrapper from '../MainWrapper/MainWrapper'
import css from './Loader.module.css'

interface LoaderProps {
	// Оголошення пропсів компонента
}

const Loader: React.FC<LoaderProps> = props => {
	// Вміст компонента

	return (
		<MainWrapper>
			<div className={css.wrapper}>
				<p>Завантаження...</p>
			</div>
		</MainWrapper>
	)
}

export default Loader
