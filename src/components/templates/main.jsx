import { Link } from 'react-router-dom'

import React from 'react'
import TitleContainer from '../molecules/TitleContainer'
import Header from '../organisms/Header'
import Form from '../organisms/Form'

import Title from '../atoms/Title'

import LabelInput from '../molecules/LabelInput'

const Main = () => {
	const handleSubmit = (e) => {
		console.log('heard submit ...')
	}

	/*  form parts   */
	const firstNameData = {
		label: {
			text: 'First Name',
			isActive: false,
		},
		input: {
			type: 'text',
			id: 'firstName',
		},
	}

	const lastNameData = {
		label: {
			text: 'Last Name',
			isActive: false,
		},
		input: {
			type: 'text',
			id: 'lastName',
		},
	}

	const birthDateData = {
		label: {
			text: 'Date of Birth',
			isActive: true,
		},
		input: {
			type: 'date',
			id: 'dateBirth',
		},
	}

	const startDateData = {
		label: {
			text: 'Start Date',
			isActive: true,
		},
		input: {
			type: 'date',
			id: 'startDate',
		},
	}

	return (
		<>
			<Header>
				<TitleContainer />
			</Header>
			<main className="container">
				<Link to="/empleyees" className="btn">
					View Current Emplyees
				</Link>
				<Title text="Create Employee" element="h2" />
				<Form onSubmit={handleSubmit}>
					<LabelInput groupData={firstNameData} />
					<LabelInput groupData={lastNameData} />
					<LabelInput groupData={birthDateData} />
					<LabelInput groupData={startDateData} />

					<button className="btn">Save</button>
				</Form>
			</main>
		</>
	)
}

export default Main
