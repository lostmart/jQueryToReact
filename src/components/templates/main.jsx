import { Link } from 'react-router-dom'

import React from 'react'
import TitleContainer from '../molecules/TitleContainer'
import Header from '../organisms/Header'
import Form from '../organisms/Form'

import Title from '../atoms/Title'

import LabelInput from '../molecules/LabelInput'

import { states } from '../../data/states'

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

	const streetData = {
		label: {
			text: 'Street',
			isActive: false,
		},
		input: {
			type: 'text',
			id: 'street',
		},
	}

	const cityData = {
		label: {
			text: 'City',
			isActive: false,
		},
		input: {
			type: 'text',
			id: 'cityData',
		},
	}

	const zipData = {
		label: {
			text: 'Zip Code',
			isActive: false,
		},
		input: {
			type: 'text',
			id: 'zipData',
		},
	}

	/*  render states */
	const RenderStates = () => {
		return states.map((state) => {
			return (
				<option key={state.abbreviation} value={state.name}>
					{state.name}
				</option>
			)
		})
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
					<div className="form-control">
						<label for="country">Country:</label>
						<select name="country" id="country">
							<RenderStates />
						</select>
					</div>

					<fieldset className="address">
						<legend>Address</legend>
						<LabelInput groupData={streetData} />
						<LabelInput groupData={cityData} />
						<LabelInput groupData={zipData} />
					</fieldset>

					<button className="btn">Save</button>
				</Form>
			</main>
		</>
	)
}

export default Main
