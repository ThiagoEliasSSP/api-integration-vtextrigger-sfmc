function addHours(date, hours) {
	date.setTime(date.getTime() + hours * 60 * 60 * 1000);

	return date;
}

function subtractHours(date, hours) {
	date.setTime(date.getTime() - hours * 60 * 60 * 1000);

	return date;
}

module.exports = addHours, subtractHours;
