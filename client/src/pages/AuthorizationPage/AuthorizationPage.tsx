import { Form, Formik } from 'formik'
import React, { useId } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import Button from '../../components/Button/Button'
import FormInput from '../../components/FieldsFolder/FormInput/FormInput'
import Title from '../../components/Title/Title'
import { setIsLoggedIn } from '../../redux/auth/auth.slice'
import css from './AuthorizationPage.module.css'

interface AuthorizationPageProps {
	// Оголошення пропсів компонента
}

const AuthorizationPage: React.FC<AuthorizationPageProps> = props => {
	const dispatch = useDispatch()

	// Вміст компонента
	const firstNameFieldId = useId()
	const lastNameFieldId = useId()
	const emailFieldId = useId()
	const passwordFieldId = useId()

	const initialValues = {
		email: '',
		password: '',
	}

	const validationSchema = yup.object().shape({
		email: yup
			.string()
			.email('Invalid email format')
			.required('Email is required'),
		password: yup
			.string()
			.min(8, 'Password must be at least 8 characters long')
			.required('Password is required'),
	})

	const handleSubmit = (values: typeof initialValues) => {
		// Отримання даних з форми
		console.log('Email:', values.email)
		console.log('Password:', values.password)

		dispatch(setIsLoggedIn(true))
	}

	return (
		<>
			{/* <Header showNav={false} /> */}
			<main className={css.mainWrapper}>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					<Form className={css.form}>
						<div className={css.title}>
							<Title>Авторизація</Title>
						</div>
						<FormInput
							fieldTitle='Пошта'
							fieldId={emailFieldId}
							fieldName='email'
						/>
						<FormInput
							fieldTitle='Пароль'
							fieldId={passwordFieldId}
							fieldName='password'
							fieldType='password'
						/>
						<div className={css.btn}>
							<Button type={'submit'}>Підтвердити</Button>
						</div>
						<div className={css.helpBar}>
							<Link to={'/'}>Забули пароль?</Link>
							<Link to={'/registration'}>Створити профіль?</Link>
						</div>
						<div className={css.quickLogin}>
							<button className={css.quickLoginBtn}>G</button>
							<button className={css.quickLoginBtn}>F</button>
						</div>
					</Form>
				</Formik>
			</main>
		</>
	)
}

export default AuthorizationPage
