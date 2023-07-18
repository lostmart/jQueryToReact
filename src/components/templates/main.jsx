import { Link } from 'react-router-dom'

import React, { useState } from 'react'
import TitleContainer from '../molecules/TitleContainer'
import Header from '../organisms/Header'
import Form from '../organisms/Form'

import Title from '../atoms/Title'

import LabelInput from '../molecules/LabelInput'

import { states } from '../../data/states'
import Modal from 'modal-package-martin-test/dist/Modal'

import dateFormatter from '../../utils/dateFormatter'

const Main = () => {
	const [showModal, setModal] = useState(false)

	const [modalContent, setModalContent] = useState({
		title: '',
		content: '',
		hasError: false,
	})

	const [formSubmitted, setFormSubmit] = useState(false)

	const handleClick = () => {
		setModal(() => !showModal)
		setFormSubmit(false)
	}

	const showEmployeeData = (msg) => {
		return (
			<ul>
				<li>
					<strong>First Name:</strong> {msg.firstName}
				</li>
				<li>
					<strong>Last Name:</strong> {msg.lastName}
				</li>
				<li>
					<strong>Date of Birth:</strong> {dateFormatter(msg.dateBirth)}
				</li>
				<li>
					<strong>Start Date:</strong> {dateFormatter(msg.startDate)}
				</li>
				<li>
					<strong>Department:</strong> {msg.department}
				</li>
				<li style={{ display: 'flex', gap: '0.4em' }}>
					<strong>Address:</strong>
					<span>
						{msg.street}, {msg.cityData} <br />
						{msg.zipData}, {msg.state}
					</span>
				</li>
			</ul>
		)
	}

	const handleSubmit = (msg) => {
		if (msg === 'error') {
			setModal(() => !showModal)
			setModalContent(() => {
				return {
					title: 'Error',
					content: 'All fields must be completed',
					hasError: true,
				}
			})
		} else {
			setModal(() => !showModal)
			setModalContent(() => {
				return {
					title: 'Employee Created!',
					content: showEmployeeData(msg),
					hasError: false,
				}
			})
			setFormSubmit(true)
			console.log(msg)
		}
	}

	/*  form parts   */
	const firstNameData = {
		label: {
			text: 'First Name',
		},
		input: {
			type: 'text',
			id: 'firstName',
		},
	}

	const lastNameData = {
		label: {
			text: 'Last Name',
		},
		input: {
			type: 'text',
			id: 'lastName',
		},
	}

	const birthDateData = {
		label: {
			text: 'Date of Birth',
		},
		input: {
			type: 'date',
			id: 'dateBirth',
		},
	}

	const startDateData = {
		label: {
			text: 'Start Date',
		},
		input: {
			type: 'date',
			id: 'startDate',
		},
	}

	const streetData = {
		label: {
			text: 'Street',
		},
		input: {
			type: 'text',
			id: 'street',
		},
	}

	const cityData = {
		label: {
			text: 'City',
		},
		input: {
			type: 'text',
			id: 'cityData',
		},
	}

	const zipData = {
		label: {
			text: 'Zip Code',
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
				<option key={state.abbreviation} value={state.abbreviation}>
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
					<h5
						className={
							modalContent.hasError ? 'modal-title error' : 'modal-title'
						}>
						{modalContent.title}
					</h5>
				</div>
				<div className="modal-body">{modalContent.content}</div>
			</>
		)
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
					<LabelInput groupData={firstNameData} submitted={formSubmitted} />
					<LabelInput groupData={lastNameData} submitted={formSubmitted} />
					<LabelInput groupData={birthDateData} submitted={formSubmitted} />
					<LabelInput groupData={startDateData} submitted={formSubmitted} />

					<fieldset className="address">
						<legend>Address</legend>
						<LabelInput groupData={streetData} submitted={formSubmitted} />
						<LabelInput groupData={cityData} submitted={formSubmitted} />

						<div className="form-control">
							<label htmlFor="state" className="active">
								State:
							</label>
							<select className="select-cont" name="state" id="state">
								<RenderStates />
							</select>
						</div>

						<LabelInput groupData={zipData} submitted={formSubmitted} />
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
