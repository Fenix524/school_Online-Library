import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import React, { ElementType } from 'react'

interface RestrictedRouteProps {
	component: ElementType
	redirectTo: string
}

export const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
	component: Component,
	redirectTo = '/',
}) => {
	const { isLoggedIn } = useAuth()

	return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />
}
