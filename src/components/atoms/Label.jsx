const Label = ({ htmlFor, text, isActive, className }) => {
	return (
		<label htmlFor={htmlFor} className={isActive ? 'active' : className}>
			{text}
		</label>
	)
}

export default Label
