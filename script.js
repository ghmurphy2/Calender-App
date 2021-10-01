// create hour blocks
// start at current time, query api for time see example
// apply current time to sheet
// red out past blocks
// allow block input text
// run timer on blocks? alert popups at intervels?
var hours = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
var hourEls = [];
var container = $(".container");
var now = momentNow();
var timeEl = $("#currentDay");

// establish timer on load
setInterval(displayTime, 1000);
//establsih timer for display
function displayTime() {
    let todayOnInterval = moment();
    let timeNow = todayOnInterval.format('HH[:]mm[:]ss');
    $('#currentTime').text(timeEl);
}