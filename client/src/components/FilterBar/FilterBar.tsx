import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ChoiceField from '../FieldsFolder/ChoiceField/ChoiceField'
import SearchField from '../FieldsFolder/SearchField/SearchField'
import css from './FilterBar.module.css'

interface FilterBarProps {
	// Оголошення пропсів компонента
}

const FilterBar: React.FC<FilterBarProps> = props => {
	const [params, setParams] = useState({})
	const [searchParams, setSearchParams] = useSearchParams()

	useEffect(() => {}, [params])

	const addParams = (nameParam: string, value: string) => {
		setParams({
			...params,
			[nameParam]: value,
		})
		setSearchParams(params)
	}

	const options = [
		{ label: 'За назвою a-z', value: 'a-z' },
		{ label: 'За назвою z-a', value: 'z-a' },
		{ label: 'Лише вільні', value: 'free' },
		{ label: 'Лише зайняті', value: 'busy' },
	]

	return (
		<div className={css.filterBox}>
			<div className={css.searchBox}>
				<SearchField onChange={addParams} />
			</div>
			<div className={css.selectBox}>
				<ChoiceField options={options} onChange={addParams} />
			</div>
		</div>
	)
}

export default FilterBar
