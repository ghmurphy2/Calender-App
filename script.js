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

var militaryTime = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
var timeEl = [];
var container = $(".container");
var currentTime = moment();
var timeEl = $("#currentDay");

setCurrentDay(currentTime);

setInterval( function(){
    currentTime = moment();
    
    setCurrentDay(currentTime);

    for(time in militaryTime) {
        setBackgroundByTime(timeEl[time], militaryTime[time], currentTime);
    }
}, 1000 );


if(!localStorage.getItem("task-tracker")) {
    initializeStorage();
}

for(var time in militaryTime) {
    
    let hourEl = $("<section>");
    hourEl.addClass("row time-block");
    container.append(hourEl);
    timeEl.push(hourEl);

    
    let timeLabelEl = $("<h2>");
    timeLabelEl.addClass("hour col-2 h-100");
    timeLabelEl.text(militaryTime[time]);
    hourEl.append(timeLabelEl);

    
    let timeInputEl = $("<input>");
    timeInputEl.attr("type", "text");
    timeInputEl.attr("value", "");
    timeInputEl.addClass("form-control col-9 h-100");
    hourEl.append(timeInputEl);

    
    let saveData = JSON.parse(localStorage.getItem("task-tracker"));
    if(saveData[militaryTime[time]]) {
        timeInputEl.val(saveData[militaryTime[time]]);
    }
   
    setBackgroundByTime(timeInputEl, militaryTime[time], currentTime);

    
    let saveButtonEl = $("<button>");
    saveButtonEl.addClass("saveBtn col-1 h-100");
    saveButtonEl.text("Save");
    hourEl.append(saveButtonEl);

    
    saveButtonEl.click( function(event) {
        
        let inputText = $(event.target).parent().children("input").val();
        let hour = $(event.target).parent().children("h2").text();

        
        let saveData = JSON.parse(localStorage.getItem("task-tracker"));
        saveData[hour] = inputText;

        
        localStorage.setItem("task-tracker", JSON.stringify(saveData));
    } );
}
//am pm removal, palce in container
//style changes?
//setCurrentDay(now);
// Create the hour element, stick with time or reverse?
// tag time elements to place in column
//remember red
// allow text input at time
// save button create, remove hour element
 //validate time at current time, establish value for color
// push tasks to local storage
// track on click, tie time and task and set item
// reformate for simplier function

function initializeStorage() {
    let saveData = {};
    for(time in militaryTime) {
        saveData[militaryTime[time]] = "";
    }
    localStorage.setItem("task-tracker", JSON.stringify(saveData));
}

