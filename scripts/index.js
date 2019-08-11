function limit(elem) {
	let max_chars = 2;
	if (elem.value.length > max_chars) {
		elem.value = elem.value.substr(0, max_chars);
	}
}

function getInputVal() {
	const inputVal = document.getElementsByClassName('numbox');
	let allInputValues = [];
	  for (let i = 0; i < inputVal.length; i++) {
	    //if(inputVal[i].value > 47)
	    //return ('The number can`t be more than 47'); //  ned fix
		allInputValues.push(inputVal[i].value);
	}
	let res = allInputValues.sort((a, b) => a - b);
	  res.push(document.getElementsByClassName('specialnumbox')[0].value)
  document.getElementById("numStatus").innerHTML = res;
  return res;
}