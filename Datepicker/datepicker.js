'use strict'

function DatePicker(year, month, mountNode){
    this.year = year;
    this.month = month;

    let model = new Model(year, month);
    let view = new View(model)
    this.render = view.render(mountNode);
}