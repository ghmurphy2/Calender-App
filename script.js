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

var time = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
var timeEls = [];
var container = $(".container");
var current = moment();
var timeEl = $("#currentTime");

setCurrentDay(now);

setInterval( function(){
    now = moment();
    setCurrentDay(now);

    for(time in hours) {
        setBackgroundByTime(timeEl[hour], hours[hour], now);
    }}, 1000 );

for(var time in hours) {
    // Create the hour element
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