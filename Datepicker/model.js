'use strict'

function Model(){    
    
    // creation of global container
    this.globalContainer = document.createElement('div');
    document.body.appendChild(this.globalContainer);
    this.globalContainer.className = 'ap-globalContainer';
    
    // constucting header 
    this.head = document.createElement('div');
    this.globalContainer.appendChild(this.head);
    this.head.className = 'ap-head';

    // setting of left button
    this.buttonLeft = document.createElement('button');
    this.head.appendChild(this.buttonLeft);
    this.buttonLeft.className = 'ap-button-left';
    let buttonLeftChar = document.createTextNode('<');
    this.buttonLeft.appendChild(buttonLeftChar);
   
    // setting of right button			
    this.buttonRight = document.createElement('button');
    this.head.appendChild(this.buttonRight);
    this.buttonRight.className = 'ap-button-right';            
    let buttonRightChar = document.createTextNode('>');
    this.buttonRight.appendChild(buttonRightChar);

    //constructing calendar days grid				
    this.daysGrid = document.createElement('div');
    this.daysGrid.className = 'ap-daysGrid';
    this.globalContainer.appendChild(this.daysGrid);
}