'use strict'

function View (model, mountNode){

    this.render = function(mountNode){
        if (!mountNode) {
            document.body.appendChild(renderBody())
        }
        mountNode.appendChild(renderBody());
    }

    function renderBody(){
        let globalContainer = document.createElement('div');        
        globalContainer.className = 'ap-globalContainer';
        globalContainer.appendChild(renderHead(model));
        globalContainer.appendChild(renderDaysSection(model));
        globalContainer.appendChild(renderDaysGrid(model));
        
        return globalContainer
    }

	function remove(){
	document.querySelector('.ap-globalContainer').remove();
}
    
    function renderHead(model) {
        let head = document.createElement('div');    
        head.className = 'ap-head';           
    
        let buttonLeft = document.createElement('button');
        
        buttonLeft.className = 'ap-button-left';
        let buttonLeftChar = document.createTextNode('<');
        buttonLeft.appendChild(buttonLeftChar);        

	head.appendChild(buttonLeft);

        for (let i = 0; i < model.monthsArray.length; i++) {
            if (model.month == i) {			
            let currentDatetext = model.monthsArray[i] + ' ' + model.year;
            let headText = document.createTextNode(currentDatetext);
            head.insertBefore(headText, head.children[1]);
            }
        } 
    
        let buttonRight = document.createElement('button');
        head.appendChild(buttonRight);
        buttonRight.className = 'ap-button-right';            
        let buttonRightChar = document.createTextNode('>');
        buttonRight.appendChild(buttonRightChar);        

        return head
    }

    function renderDaysSection(model){
        let daysSection = document.createElement('div');
        daysSection.className = 'ap-daysSection';    			
    
        for (let i = 0; i < model.daysArray.length; i++ ){
            let weekDay = document.createElement('div');
            daysSection.appendChild(weekDay);
            let dayName = document.createTextNode(model.daysArray[i]);
            weekDay.appendChild(dayName);
            weekDay.className = 'ap-dayNameCell'
        }

        return daysSection
    }
    

    function renderDaysGrid(model) {
        let daysGrid = document.createElement('div');
        daysGrid.className = 'ap-daysGrid';    

        
        for (let i = 0; i < model.getFirstDayOfMonth(); i++){
            let emptyCell = document.createElement('div');			
            daysGrid.appendChild(emptyCell);
            emptyCell.style.width = '30px';
            emptyCell.style.margin = '2px';
        }

        
        for (let i = 1; i <= model.getDaysInMonth(); i++) {			
            let dayDiv = document.createElement('div');
            daysGrid.appendChild(dayDiv);
            if (i == new Date().getDate() && model.month == new Date().getMonth() && model.year == new Date().getFullYear()) {
            dayDiv.style.background = 'yellow';
        }

        if ( (i + model.getFirstDayOfMonth()) % 7 == 0 ){
            dayDiv.style.color = 'red';
        }			

        let number = document.createTextNode(i);
        dayDiv.appendChild(number);
        dayDiv.className = 'ap-dayCell';
        }

        return daysGrid
    }
    
}