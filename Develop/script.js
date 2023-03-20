// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// // $(function () {
// var scheduleBox = $("#schedule-box")
// // for local storage
// var hourSide = $("#hour-side")


var saveBtn = $(".saveBtn");
var textAreaDescription = $("#description")


function scheduler(){

  // var businessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
  
  // // for (var i=0; i<businessHours.length; i++){

  // //   hourSide.text(businessHours[i]);
  // //   scheduleBox.append(hourSide)
  // //   console.log(scheduleBox)
  // // }
  function saveTask(){

  }





  
}
scheduler();

saveBtn.addEventListener("click", saveTask);





  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });


` pseudo code:
I want the day to appear at the top

make timeblocks for 9-5

color code past present future blocks

i want to add text and save in local storage

then save on page

`

// compare the current time with the time in the array
// add class accordingly (if)
// loop through to add time on each









           