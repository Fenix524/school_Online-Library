import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import Loader from './components/Loader/Loader'
import { PrivateRoute } from './components/PrivateRoute'
import { RestrictedRoute } from './components/RestrictedRoute'
import ProfilePage from './pages/ProfilePage/ProfilePage'
const Header = lazy(() => import('./components/Header/Header'))
const AdminPage = lazy(() => import('./pages/AdminPage/AdminPage'))
const AuthorizationPage = lazy(
	() => import('./pages/AuthorizationPage/AuthorizationPage')
)
const BooksPage = lazy(() => import('./pages/BooksPage/BooksPage'))
const EBooksPage = lazy(() => import('./pages/EBooksPage/EBooksPage'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const RegistrationPage = lazy(
	() => import('./pages/RegistrationPage/RegistrationPage')
)

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='/books' element={<BooksPage />} />
				<Route path='/ebooks' element={<EBooksPage />} />
				<Route
					path='/authorization'
					element={
						<RestrictedRoute
							redirectTo='/books'
							component={AuthorizationPage}
						/>
					}
				/>
				<Route
					path='/registration'
					element={
						<RestrictedRoute redirectTo='/books' component={RegistrationPage} />
					}
				/>
				<Route path='/admin' element={<AdminPage />} />
				<Route
					path='/profile'
					element={<PrivateRoute redirectTo='/books' component={ProfilePage} />}
				/>
			</Route>
			<Route path='/loader' element={<Loader />} />
		</Routes>
	)
}

export default App
