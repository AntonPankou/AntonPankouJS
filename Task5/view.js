function DatePicker(year,month,date) {
    this.year = year;
    this.month = month;
    this.date = date;

    let now = new Date(year, month, date);
    let monthFisrtDay = new Date(year, month);
    let daysInMonth = (new Date (year, month + 1, -1)).getDate()+1;
    
    Model.call(this);    

    // constucting header section with current date			
    for (let i = 0; i < dpData.months.length; i++) {
        if (now.getMonth() == i) {			
        let currentDatetext = dpData.months[i] + ' ' +now.getFullYear();
        let headText = document.createTextNode(currentDatetext);
        this.head.insertBefore(headText, this.head.children[1]);
        }
    }
                
    // empty cells on calendar
    for (let i = 0; i < monthFisrtDay.getDay(); i++){
        let emptyCell = document.createElement('div');			
        this.daysGrid.appendChild(emptyCell);
        emptyCell.style.width = '30px';
        emptyCell.style.margin = '2px';
    }

    // constucting week days section
    this.daysSection = document.createElement('div');
    this.daysSection.className = 'ap-daysSection';
    this.globalContainer.insertBefore(this.daysSection, this.globalContainer.children[1]);			
    
    for (let i = 0; i < dpData.week.length; i++ ){
        let weekDay = document.createElement('div');
        this.daysSection.appendChild(weekDay);
        let dayName = document.createTextNode(dpData.week[i]);
        weekDay.appendChild(dayName);
        weekDay.className = 'ap-dayNameCell'
    }

    // creating of days grid
    for (let i = 1; i <= daysInMonth; i++) {			
        let dayDiv = document.createElement('div');
        this.daysGrid.appendChild(dayDiv);
    if (i == now.getDate()) {
        dayDiv.style.background = 'yellow';
    }
    if ( (i + monthFisrtDay.getDay()) % 7 == 0 ){
        dayDiv.style.color = 'red';
    }			
    let number = document.createTextNode(i);
        dayDiv.appendChild(number);
        dayDiv.className = 'ap-dayCell';
    }
    }  