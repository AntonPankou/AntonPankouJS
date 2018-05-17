function Model(year, month){
    this.date = new Date(year, month)
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth();
    this.today = new Date().getDay();
    this.day = this.date.getDay();    

    this.monthsArray = ['January','February','March','April', 'May','June','July','August','September','October','November','December'];
    this.daysArray = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

    this.getFirstDayOfMonth = function(){
        return this.date.getDay()
    }

    this.getDaysInMonth = function(){
        return (new Date (this.year, this.month + 1, -1)).getDate()+1;
    }
    
}