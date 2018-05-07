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
}

addSteps();