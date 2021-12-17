//Display the current date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(today);


//Parse Time of day
var currentTime = moment();
$("#time").text(today.format("h"));

var time = document.getElementById("#time")
var past = document.querySelector(".past")
var present = document.querySelector(".present")
var future = document.querySelector(".future")
var column8 = document.querySelector(".col-8")
var description = document.querySelector(".description")
var hours = ['9', '10', '11', '12', '1', '2', '3', '4', '5']


//Timeblocks are color coded to represent past, present and future
function timeOfDay() {

    for (i=0; i <= hours.lenght; i++) {
        if (currentTime > i) {
            description.classList.remove('present');
            description.classList.remove('future');
        } else if (currentTime = i) {
            description.classList.remove('past');
            description.classList.remove('future');;
        } else {
            description.classList.remove('past');
            description.classList.remove('future');;
        }
    }
}

timeOfDay();

//for (i=0; i < hours.length; i++)
//

//if (today > the time displayed in the calendar, display the middle boxes in gray)
//else if (today = the time displayed in the claendar, display the middle boxes red)
//else display the middle boxes green 
//try adding and ID to each different time and create a variable for each