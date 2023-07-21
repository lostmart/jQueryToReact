/**
 * Sorts an array of objects based on a specified sort key in ascending order.
 * Optionally, the sort order can be reversed.
 *
 * @param {Array<Object>} data - The array of objects to be sorted.
 * @param {string} sortKey - The key of the object property to be used for sorting.
 * @param {boolean} [reverse=false] - Whether to sort the array in reverse (descending) order.
 * @returns {Array<Object>} The sorted array of objects.
 */
const sortedData = (data, sortKey, reverse) => {
	if (!sortKey) return data

	const clonedArray = [...data]

	const sortedItems = clonedArray.sort((a, b) => {
		return a[sortKey] > b[sortKey] ? 1 : -1
	})

	if (reverse) clonedArray.reverse()

	return sortedItems
}

export default sortedData