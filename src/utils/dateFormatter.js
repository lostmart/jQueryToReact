/**
 * Formats a date string into the format "Jul 21, 2023".
 *
 * @param {string} dateString - The input date string to be formatted.
 * @returns {string} The formatted date string in the format "Jul 21, 2023".
 */

const dateFormatter = (dateString) => {
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	]

	const newDate = new Date(dateString)
	const birthYear = newDate.getFullYear()
	const birthMonth = months[newDate.getMonth()]
	const birthDay = newDate.getDate()
	return `${birthMonth} ${birthDay}, ${birthYear}`
}

export default dateFormatter
