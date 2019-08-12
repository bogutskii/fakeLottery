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
const getInputVal = function getInputVal() {
	const inputVal = document.getElementsByClassName('numbox');
	let allInputValues = [];
	for (let i = 0; i < inputVal.length; i++) {
		allInputValues.push(inputVal[i].value);
	}
	let res = allInputValues.sort((a, b) => a - b);
	  res.push('*' + document.getElementsByClassName('specialNumBox')[0].value + '*');
	document.getElementById('userNumStatus').innerHTML = res;
	return res;
};

//randomaizing win number
const winningNumbers = function winNumbers() {
	let win = [];
	for (let i = 0; i < 20; i++) {
		let rand1 = Math.floor(Math.random() * 69);
		if (!win.includes(rand1)) {
			win.push(rand1);
		}
	}
	win.length = 5;
	win.sort((a, b) => a - b).push('*' + Math.floor(Math.random() * 26) + '*');
	document.getElementById('winNumStatus').innerHTML = win;
	return win;
};

//Match numbers ---------need fix---------
const matchNumbers = function matchNum(userNum,win) {
	let arr = [];
	for(let i = 0; i < win.length; i++){
		let temp = win().shift();
		if(userNum.includes(temp)){
			arr.push(temp);
		}
	}
	document.getElementById('matchNumStatus').innerHTML = arr;
	return  arr;
};