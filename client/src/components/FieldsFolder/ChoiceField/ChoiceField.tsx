import React from 'react'
import Dropdown, { Option } from 'react-dropdown'
import 'react-dropdown/style.css'
import { useSearchParams } from 'react-router-dom'
import css from './ChoiceField.module.css'

type optionType = {
	label: string
	value: string
}

interface ChoiceFieldProps {
	options: optionType[]
	onChange: (nameParam: string, value: string) => void
}

const ChoiceField: React.FC<ChoiceFieldProps> = ({ options, onChange }) => {
	const [searchParams, setSearchParams] = useSearchParams()
	// console.log(options)

	const defaultOption =
		options.find(option => option.value === searchParams.get('filter')) ||
		options[0]

	const handleChange = (e: Option) => {
		const value = e.value
		onChange('filter', value)
	}

	return (
		<Dropdown
			controlClassName={css.dropdown}
			arrowClassName={css.arrow}
			menuClassName={css.menu}
			options={options}
			onChange={handleChange}
			value={defaultOption}
			placeholder='Select an option'
		/>
	)
}

export default ChoiceField
