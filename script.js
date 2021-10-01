// create hour blocks
// start at current time, query api for time see example
// apply current time to sheet
// red out past blocks
// allow block input text
// run timer on blocks? alert popups at intervels?
var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
var hourEls = [];
var container = $(".container");
var now = moment();
var timeEl = $("#currentDay");