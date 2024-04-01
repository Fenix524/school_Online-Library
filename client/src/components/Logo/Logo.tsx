import React from 'react'
import { Link } from 'react-router-dom'
import css from './Logo.module.css'

interface LogoProps {
	// Оголошення пропсів компонента
}

const Logo: React.FC<LogoProps> = props => {
	// Вміст компонента

	return (
		<Link to='/' className={css.logo}>
			OLibrary
		</Link>
	)
}

export default Logo
