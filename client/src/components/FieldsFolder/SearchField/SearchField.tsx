import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'
import css from './SearchField.module.css'

interface SearchFieldProps {
	onChange: (nameParam: string, value: string) => void
}

const SearchField: React.FC<SearchFieldProps> = ({ onChange }) => {
	const [searchParams, setSearchParams] = useSearchParams()

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		const value = e.target.value

		onChange('search', value)
	}
	return (
		<div className={css.wrapper}>
			<input
				className={css.searchField}
				type='text'
				placeholder='Пошук'
				value={searchParams.get('search') || ''}
				onChange={handleChange}
			/>

			<FaSearch className={css.icon} size={25} />
		</div>
	)
}

export default SearchField
