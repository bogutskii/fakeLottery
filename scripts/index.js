let maxWinNum = '';
let randomNum = [];
// bank credit
let credits = 0;
// limit for entering more than 69
//let maxWinStatus = 0;


document.getElementById('bankCredit').innerHTML = 0 + ' credits';
document.getElementById('userNumStatus').innerHTML = '0,0,0,0,0,*0*';
document.getElementById('winNumStatus').innerHTML = '0,0,0,0,0,*0*';

const getBankCredit = () => {
	credits = document.getElementById('inputBank').value;
	document.getElementById('bankCredit').innerHTML = credits + ' credits';
	return credits;
};

const minusCredit = () => {
	if (credits >= 2) {
		credits -= 2;
	}
	else if (credits <= 1) {
		return alert('refill credits');
	}
	document.getElementById('bankCredit').innerHTML = credits + ' credits';

};

// limit on enter numbers
function limit(elem) {
	let max_chars = 2;
	if (elem.value > 69) {
		elem.value = elem.value.substr(0, max_chars - 1);
	}
	else if (elem.value.length > max_chars) {
		elem.value = elem.value.substr(0, max_chars);
	}
}

// limit for special  entering more than 26
function limitSpecial(elem) {
	let max_chars = 2;
	if (elem.value > 26) {
		elem.value = elem.value.substr(0, max_chars - 1);
	}
	else if (elem.value.length > max_chars) {
		elem.value = elem.value.substr(0, max_chars);
	}
}

// collects all input values into an array, and sorts (except for the special value at the end)
const getInputVal = () => {
	const inputVal = document.getElementsByClassName('numbox');
	let allInputValues = [];
	for (let i = 0; i < inputVal.length; i++) {
		allInputValues.push(inputVal[i].value);
	}
	let res = allInputValues.sort((a, b) => a - b).map(el => Number(el));
	let special = document.getElementsByClassName('specialNumBox')[0].value;
	res.push('*' + special + '*');
	document.getElementById('userNumStatus').innerHTML = res;
	return res;
};
//randomaizing win number
const randomizer = () => {
	let win = [];
	for (let i = 0; i < 20; i++) {
		let rand1 = Math.floor(Math.random() * 68 + 1);
		if (!win.includes(rand1)) {
			win.push(rand1);
		}
	}
	win = [...new Set(win)]
	win.length = 5;
	win.sort((a, b) => a - b).push('*' + Math.floor(Math.random() * 25 + 1) + '*');
	return win;
};
const randomUserNumber = () => randomizer();
const winningNumbers = randomizer;

// entering random numbers in input fields
const inputRandom = () => {
	randomNum = randomUserNumber();
	for (let i = 0; i < 5; i++) {
		document.getElementsByClassName('numbox')[i].value = randomNum[i] + '';
	}
	document.getElementsByClassName('specialNumBox')[0].value = randomNum[5].split('*').join('');
};

//Match numbers ---------need fix---------
const matchNumbers = () => {
	if (credits < 2) {
		return 'Refil credit';
	}
	let win = 0;
	let user = getInputVal();
	let arr = [];
	document.getElementById('winNumStatus').innerHTML = win = winningNumbers();

	for (let i = 0; i < winningNumbers().length; i++) {
		let temp = win.shift();
		if (user.includes(temp)) {
			arr.push(temp);
		}
	}
	document.getElementById('matchNumStatus').innerHTML = arr;
	if (arr.length >= maxWinNum.length) {
		maxWinNum = arr;
		document.getElementById('maxWinStatus').innerHTML = maxWinNum;
	}
	return arr;
};

// counter
const clickCounter = () => {
	if (typeof(Storage)) {
		if (sessionStorage.clickcount) {
			sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
		} else {
			sessionStorage.clickcount = 1;
		}
		document.getElementById('CountResult').innerHTML = 'You have clicked the button ' + sessionStorage.clickcount + ' time(s) in this session.';
	} else {
		document.getElementById('CountResult').innerHTML = 'Sorry, your browser does not support web storage...';
	}
};

const clickCounterZero = () => {
	sessionStorage.clickcount = 0;
	document.getElementById('CountResult').innerHTML = 'You have clicked the button ' + sessionStorage.clickcount + ' time(s) in this session.';
};

