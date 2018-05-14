function remove() {
    document.querySelector('.ap-globalContainer').remove();
}

function prevMonth() {
    remove();	
    datePicker = new DatePicker(datePicker.year, datePicker.month - 1, datePicker.date);	
    addSteps();
}

function nextMonth(){
    remove();	
    datePicker = new DatePicker(datePicker.year, datePicker.month + 1, datePicker.date);	
    addSteps();
}

function addSteps() {
    document.querySelector('.ap-button-left').addEventListener("click", prevMonth);
    document.querySelector('.ap-button-right').addEventListener("click", nextMonth);
	pickMessage();
}

addSteps();

let arr = document.getElementsByClassName('ap-dayCell');


function pickMessage(){	
	
	let arr = document.getElementsByClassName('ap-dayCell');
	for (let i = 0; i < arr.length; i++) {
	function message () {
	alert('Hi! It`s ' + new Date(datePicker.year, datePicker.month, arr[i].innerHTML).toLocaleDateString() + ' - just another empty and useless day of your life ;)')
	}
	arr[i].addEventListener("click", message);
	}
	}





