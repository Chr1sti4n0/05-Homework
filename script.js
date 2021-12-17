//Display the current date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(today);


var time = document.getElementById("#9")
var past = document.querySelector(".past")
var present = document.querySelector(".present")
var future = document.querySelector(".future")
//Timeblocks are color coded to represent past, present and future

//Clicking the save button will save the event in local storage
function trackTime() {
    if (today > 9) {
        present.classList.add('present');
    }
}
trackTime();
//if (today > the time displayed in the calendar, display the middle boxes in gray)
//else if (today = the time displayed in the claendar, display the middle boxes red)
//else display the middle boxes green 
//try adding and ID to each different time and create a variable for each