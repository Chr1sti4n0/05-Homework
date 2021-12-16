//Display the current date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(today)

//Display timeblocks for different business hours

//Timeblocks are color coded to represent past, present and future

//Clicking on timeblock will allow the user to type an event in

//Clicking the save button will save the event in local storage
