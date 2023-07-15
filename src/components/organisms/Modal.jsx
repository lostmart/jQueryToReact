import React, { useState, useEffect } from 'react'
import './Modal.css'

const Modal = ({ children }) => {
	const [showModal, setModal] = useState(true)

	const handleClick = (e) => {
		console.log(e.target.className)
		if (e.target.className === 'close' || e.target.className === 'modal') {
			setModal(() => false)
		}
	}

	if (showModal) {
		return (
			<div onClick={handleClick} className="modal">
				<div className="modal-content">
					<span onClick={handleClick} className="close">
						&times;
					</span>
					{children}
				</div>
			</div>
		)
	} else {
		return null
	}
}

export default Modal
