// limit for entering more than 69
function limit(elem) {
	let max_chars = 2;
	if (elem.value > 69 ) {
		elem.value = elem.value.substr(0, max_chars - 1);
	}
	else if (elem.value.length > max_chars) {
		elem.value = elem.value.substr(0, max_chars);
	}
}
// limit for special  entering more than 26
function limitSpecial(elem) {
	let max_chars = 2;
	if (elem.value > 26 ) {
		elem.value = elem.value.substr(0, max_chars - 1);
	}
	else if (elem.value.length > max_chars) {
		elem.value = elem.value.substr(0, max_chars);
	}
}

// collects all input values into an array, and sorts (except for the special value at the end)
function getInputVal() {
	const inputVal = document.getElementsByClassName('numbox');
	let allInputValues = [];
	for (let i = 0; i < inputVal.length; i++) {
		allInputValues.push(inputVal[i].value);
	}
	let res = allInputValues.sort((a, b) => a - b);
	  res.push(document.getElementsByClassName('specialnumbox')[0].value);
	document.getElementById('userNumStatus').innerHTML = res.map(el => parseInt(el));
	return res;
}

