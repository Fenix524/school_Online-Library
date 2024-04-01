import React from 'react'
import css from './MainWrapper.module.css'

interface MainWrapperProps {
	children: React.ReactNode
}

const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {
	return <main className={css.main}>{children}</main>
}

export default MainWrapper
