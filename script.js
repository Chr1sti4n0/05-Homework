//Display the current date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(today);


//Parse Time of day
var currentTime = moment();
$("#time").text(today.format("h"));
console.log(today.format("h"));

var time9 = document.getElementById("9")
var time10 = document.getElementById("10")
var time11 = document.getElementById("11")
var time12 = document.getElementById("12")
var time1 = document.getElementById("13")
var time2 = document.getElementById("14")
var time3 = document.getElementById("15")
var time4 = document.getElementById("16")
var time5 = document.getElementById("17")
var past = document.querySelector(".past")
var present = document.querySelector(".present")
var future = document.querySelector(".future")
var column8 = document.querySelector(".col-8")
var description = document.querySelector(".description")
var saveEvent = document.getElementById("saveEvent")
var hours = ['9', '10', '11', '12', '1', '2', '3', '4', '5']


//Timeblocks are color coded to represent past, present and future
// function timeOfDay() {

//     for (i=0; i <= hours.lenght; i++) {
//         if (currentTime > i) {
//             description.classList.remove('present');
//             description.classList.remove('future');
//         } else if (currentTime = i) {
//             description.classList.remove('past');
//             description.classList.remove('future');;
//         } else {
//             description.classList.remove('past');
//             description.classList.remove('future');;
//         }
//     }
// }

// timeOfDay();

function dayTime() {
    if (today.format("H") == time9.id) {
        time9.classList.add('present');
        time9.classList.remove('past');
        time9.classList.remove('future');
    } else if (today.format("H") < time9.id) {
        time9.classList.add('past');
        time9.classList.remove('present');
        time9.classList.remove('future');
    } else {
        time9.classList.add('future');
        time9.classList.remove('past');
        time9.classList.remove('present');
    }
    if (today.format("H") == time10.id) {
        time10.classList.add('present');
        time10.classList.remove('past');
        time10.classList.remove('future');
        console.log("time")
    } else if (today.format("H") > time10.id) {
        time10.classList.add('past');
        time10.classList.remove('present');
        time10.classList.remove('future');
    } else {
        time10.classList.add('future');
        time10.classList.remove('past');
        time10.classList.remove('present');
    }
    if (today.format("H") == time11.id) {
        time11.classList.add('present');
        time11.classList.remove('past');
        time11.classList.remove('future');
        console.log("time")
    } else if (today.format("H") > time11.id) {
        time11.classList.add('past');
        time11.classList.remove('present');
        time11.classList.remove('future');
    } else {
        time11.classList.add('future');
        time11.classList.remove('past');
        time11.classList.remove('present');
    }
    if (today.format("H") == time12.id) {
        time12.classList.add('present');
        time12.classList.remove('past');
        time12.classList.remove('future');
        console.log("time")
    } else if (today.format("H") > time12.id) {
        time12.classList.add('past');
        time12.classList.remove('present');
        time12.classList.remove('future');
    } else {
        time12.classList.add('future');
        time12.classList.remove('past');
        time12.classList.remove('present');
    }
    if (today.format("H") == time1.id) {
        time1.classList.add('present');
        time1.classList.remove('past');
        time1.classList.remove('future');
        console.log("time")
    } else if (today.format("H") > time1.id) {
        time1.classList.add('past');
        time1.classList.remove('present');
        time1.classList.remove('future');
    } else {
        time1.classList.add('future');
        time1.classList.remove('past');
        time1.classList.remove('present');
    }
    if (today.format("H") == time2.id) {
        time2.classList.add('present');
        time2.classList.remove('past');
        time2.classList.remove('future');
        console.log("time")
    } else if (today.format("H") > time2.id) {
        time2.classList.add('past');
        time2.classList.remove('present');
        time2.classList.remove('future');
    } else {
        time2.classList.add('future');
        time2.classList.remove('past');
        time2.classList.remove('present');
    }
    if (today.format("H") == time3.id) {
        time3.classList.add('present');
        time3.classList.remove('past');
        time3.classList.remove('future');
        console.log("time")
    } else if (today.format("H") > time3.id) {
        time3.classList.add('past');
        time3.classList.remove('present');
        time3.classList.remove('future');
    } else {
        time3.classList.add('future');
        time3.classList.remove('past');
        time3.classList.remove('present');
    }
    if (today.format("H") == time4.id) {
        time4.classList.add('present');
        time4.classList.remove('past');
        time4.classList.remove('future');
        console.log("time")
    } else if (today.format("H") > time4.id) {
        time4.classList.add('past');
        time4.classList.remove('present');
        time4.classList.remove('future');
    } else {
        time4.classList.add('future');
        time4.classList.remove('past');
        time4.classList.remove('present');
    }
    if (today.format("H") == time5.id) {
        time5.classList.add('present');
        time5.classList.remove('past');
        time5.classList.remove('future');
        console.log("time")
    } else if (today.format("H") > time5.id) {
        time5.classList.add('past');
        time5.classList.remove('present');
        time5.classList.remove('future');
    } else {
        time5.classList.add('future');
        time5.classList.remove('past');
        time5.classList.remove('present');
    }
}

dayTime();


saveEvent.onclick = function() {
    localStorage.setItem("description" , "")

    document.getElementById("9").innerHTML = 
    localStorage.getItem("description")
}

saveEvent();


//if (today > the time displayed in the calendar, display the middle boxes in gray)
//else if (today = the time displayed in the claendar, display the middle boxes red)
//else display the middle boxes green 
//try adding and ID to each different time and create a variable for each