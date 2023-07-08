import React from 'react'

const Title = ({ text, element }) => {
	switch (element) {
		case 'h1':
			return <h1>{text}</h1>
		case 'h2':
			return <h2>{text}</h2>
		case 'h3':
			return <h3>{text}</h3>
		case 'h4':
			return <h4>{text}</h4>
		default:
			return <h6>{text}</h6>
	}
}

export default Title
