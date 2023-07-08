const Label = ({ htmlFor, text, isActive,  }) => {

	return (
		<label
			htmlFor={htmlFor}
			className={isActive ? 'active' : ''}>
			{text}
		</label>
	)
}

export default Label
