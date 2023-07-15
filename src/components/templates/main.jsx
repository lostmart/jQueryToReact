import { Link } from 'react-router-dom'

import React, { useState } from 'react'
import TitleContainer from '../molecules/TitleContainer'
import Header from '../organisms/Header'
import Form from '../organisms/Form'

import Title from '../atoms/Title'

import LabelInput from '../molecules/LabelInput'

import { states } from '../../data/states'
import Modal from 'modal-package-martin-test/dist/Modal'

const Main = () => {
	const [showModal, setModal] = useState(true)

	const handleClick = () => {
		setModal(() => !showModal)
	}

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
			type: 'number',
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

	/*  render modal content  */
	const RenderModalContent = () => {
		return (
			<>
				<div className="modal-header">
					<h5 className="modal-title">Modal title</h5>
				</div>
				<div className="modal-body">
					<p>Modal body text goes here.</p>
				</div>
			</>
		)
	}

	return (
		<>
			<Header>
				<TitleContainer />
			</Header>
			<main className="container">
				<button onClick={handleClick}>Show Modal</button>
				<Link to="/empleyees" className="btn">
					View Current Emplyees
				</Link>
				<Title text="Create Employee" element="h2" />
				<Form onSubmit={handleSubmit}>
					<LabelInput groupData={firstNameData} />
					<LabelInput groupData={lastNameData} />
					<LabelInput groupData={birthDateData} />
					<LabelInput groupData={startDateData} />

					<fieldset className="address">
						<legend>Address</legend>
						<LabelInput groupData={streetData} />
						<LabelInput groupData={cityData} />

						<div className="form-control">
							<label htmlFor="state" className="active">
								State:
							</label>
							<select className="select-cont" name="state" id="state">
								<RenderStates />
							</select>
						</div>

						<LabelInput groupData={zipData} />
					</fieldset>

					<div className="form-control">
						<label htmlFor="department" className="active">
							Department:
						</label>

						<select className="select-cont" name="department" id="department">
							<option>Sales</option>
							<option>Marketing</option>
							<option>Engineering</option>
							<option>Human Resources</option>
							<option>Legal</option>
						</select>
					</div>

					<button type="submit" className="btn">
						Save
					</button>
				</Form>
				<Modal showModal={showModal} onClick={handleClick}>
					<RenderModalContent />
				</Modal>
			</main>
		</>
	)
}

export default Main
