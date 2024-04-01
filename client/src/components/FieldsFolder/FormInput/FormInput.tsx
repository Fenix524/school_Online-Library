import { ErrorMessage, Field, useField } from 'formik'

import clsx from 'clsx'
import React from 'react'
import css from './FormInput.module.css'

interface FieldProps {
	fieldTitle: string
	fieldId: string
	fieldName: string
	fieldType?: React.InputHTMLAttributes<HTMLInputElement>['type']
}

const FormInput: React.FC<FieldProps> = ({
	fieldTitle,
	fieldId,
	fieldName,
	fieldType = 'Text',
}) => {
	const { touched, error } = useField(fieldName)[1] // Destructure

	const fieldClasses = clsx(css.fieldIndecator, {
		[css.error]: touched && error,
		[css.success]: touched && !error,
	})

	return (
		<div className={css.wrapper}>
			<label className={css.title} htmlFor={fieldId}>
				{fieldTitle || 'Form field'}
			</label>
			<div className={css.fieldWraper}>
				<Field
					className={css.inputField}
					type={fieldType || 'text'}
					name={fieldName}
					id={fieldId}
				/>
				<span className={fieldClasses}></span>
			</div>
			<ErrorMessage
				className={css.fieldError}
				name={fieldName}
				component='span'
			/>
		</div>
	)
}

export default FormInput
