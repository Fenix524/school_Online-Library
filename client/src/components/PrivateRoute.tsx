import React, { ElementType } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

interface PrivateRouteProps {
	component: ElementType
	redirectTo: string
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
	component: Component,
	redirectTo = '/',
}) => {
	const { isLoggedIn } = useAuth()

	return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />
}
