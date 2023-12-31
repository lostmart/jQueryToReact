import Label from '../atoms/Label'
import Input from '../atoms/Input'

const SearchInput = ({ groupData, onChange, inputValue }) => {
	const handleChange = (e) => {
		onChange(e.target.value)
	}
	return (
		<div className="search-container">
			<div className="search-control">
				<Label
					htmlFor={groupData.input.id}
					text={groupData.label.text}
					className="search-label"
				/>
				<Input
					type={groupData.input.type}
					id={groupData.input.id}
					onChange={handleChange}
					value={inputValue}
				/>
			</div>
		</div>
	)
}

export default SearchInput
