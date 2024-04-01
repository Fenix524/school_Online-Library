import React from 'react'
import css from './Title.module.css'

interface TitleProps {
	children: React.ReactNode
	size?: 'small' | 'medium' | 'large'
	level?: 'h1' | 'h2' | 'h3'
}

const Title: React.FC<TitleProps> = ({
	children,
	size = 'medium',
	level = 'h1',
}) => {
	let fontSizeClass = ''
	switch (size) {
		case 'small':
			fontSizeClass = css.small
			break
		case 'large':
			fontSizeClass = css.large
			break
		default:
			fontSizeClass = css.medium
			break
	}

	const Tag = level

	return <Tag className={`${css.title} ${fontSizeClass}`}>{children}</Tag>
}

export default Title
