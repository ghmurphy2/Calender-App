// create hour blocks
// start at current time, query api for time see example
// apply current time to sheet
// red out past blocks
// allow block input text
// run timer on blocks? alert popups at intervels?
// establish timer on load
//setInterval(displayTime, 1000);
//establsih timer for display
//console.log("currentTime")
//am pm removal, palce in container
//style changes?

var time = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
var timeEls = [];
var container = $(".container");
var current = moment();
var timeEl = $("#currentTime");
var dayCurrent = timeEl
//setCurrentDay(now);

setInterval( function(){
    now = moment();
    setCurrentDay(now);

    for(time in hours) {
        setBackgroundByTime(timeEl[time], hours[hour], now);
    }}, 1000 );

for(var time in hours) {
    // Create the hour element, stick with time or reverse?
    console.log(hours);
    let timeEl = $("<section>");
    timeEl.addClass("row time-block");
    container.append(timeEl);
    timeEls.push(timeEl);
}

for(var time in hours) {
    let timeEl = $("<section>");
    timeEl.addClass("row time-block");
    container.append(timeEl);
    timeEls.push(timeEl);
// tag time elements to place in column
//remember red
    let timeTextEl = $("<h2>");
    timetimeEl.addClass("time col-4 h-200");
    timeTextEl.text(time[timeEl]);
    timeEl.append(timeTextEl);

    // allow text input at time
    let timeInputEl = $("<input>");
    timeInputEl.attr("type", "text");
    timeInputEl.attr("value", " ");
    timeInputEl.addClass("form-control col-9 h-100");
    timeEl.append(timeInputEl);

}
// save button create, remove hour element
let saveButtonEl = $("<button>");
    saveButtonEl.addClass("saveBtn col-2 h-150");
    saveButtonEl.text("Save");
    timeEl.append(saveButtonEl);
    
//validate time at current time, establish value for color
function setBackground(input, time, now) {
        let timeCurrent = moment(time, "h A");
        if(now.isBefore(timeCurrent)) {
            input.addClass("future");
        }
        else if(now.isAfter(timeCurrent) && now.isBefore(timeCurrent.add(1, "h"))) {
            input.addClass("present");
        }
        else {
            input.addClass("past");
        }
    }