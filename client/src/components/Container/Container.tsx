import React from 'react'
import css from './Container.module.css'

interface ContainerProps {
	children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	// Додавання документації
	/**
	 * Компонент-контейнер
	 * @param children - Вміст компонента
	 */

	return <div className={css.container}>{children}</div>
}

export default Container
