import clsx from 'clsx'
import React from 'react'
import css from './Button.module.css'

interface ButtonProps {
	children: React.ReactNode | JSX.Element
	style?: 'brown' | 'gray' | 'transparent'
	type?: 'button' | 'submit' | 'reset'
	onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
	children,
	style = 'brown',
	type = 'button',
	onClick,
}) => {
	const baseClasses = clsx(css.btn, css[style])
	return (
		<button className={baseClasses} type={type} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
