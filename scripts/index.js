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
const getInputVal = function () {
	const inputVal = document.getElementsByClassName('numbox');
	let allInputValues = [];
	for (let i = 0; i < inputVal.length; i++) {
		allInputValues.push(inputVal[i].value);
	}
	let res = allInputValues.sort((a, b) => a - b).map(el=> Number(el));
	let special = document.getElementsByClassName('specialNumBox')[0].value;
	res.push('*' + special + '*');
	document.getElementById('userNumStatus').innerHTML = res;
	return res;
};
//randomaizing win number
const winningNumbers = function () {
	let win = [];
	for (let i = 0; i < 20; i++) {
		let rand1 = Math.floor(Math.random() * 68 + 1);
		if (!win.includes(rand1)) {
			win.push(rand1);
		}
	}
	win.length = 5;
	win.sort((a, b) => a - b).push('*' + Math.floor(Math.random() * 25 + 1) + '*');
	return win;
};

//Match numbers ---------need fix---------
const matchNumbers = function () {
	let win = 0;
	let user = getInputVal();
	let arr = [];
	document.getElementById('winNumStatus').innerHTML = win = winningNumbers();

	for(let i = 0; i < winningNumbers().length; i++){
		let temp = win.shift();
		if(user.includes(temp)){
			arr.push(temp);
		}
	}

	document.getElementById('matchNumStatus').innerHTML = arr;
	return  arr;
};

// counter
const clickCounter =function () {
	if (typeof(Storage) !== 'undefined') {
		if (sessionStorage.clickcount) {
			sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
		} else {
			sessionStorage.clickcount = 1;
		}
		document.getElementById('CountResult').innerHTML = 'You have clicked the button ' + sessionStorage.clickcount + ' time(s) in this session.';
	} else {
		document.getElementById('CountResult').innerHTML = 'Sorry, your browser does not support web storage...';
	}
}

function clickCounterZero() {
	sessionStorage.clickcount = 0;
	document.getElementById('CountResult').innerHTML='You have clicked the button ' + sessionStorage.clickcount + ' time(s) in this session.';
}

