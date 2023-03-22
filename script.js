// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentDay = $("#currentDay")

function displayTime(){
  var today = dayjs();
  $(currentDay).text(today.format("dddd, MMMM D YYYY"));
  var currentHour = dayjs().format("hh");
}
setInterval(displayTime, 1000);


$(function () {

  var businessHoursInt = [9, 10, 11, 12, 13, 14, 15, 16, 17]
  var businessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

  for (var i=0; i<businessHours.length; i++){
    // for each element of the array, so each business hour
    // create a div which is my row, with 3 columns, one for the time, one for the description, one for the save button
    // add the classes for each, and append to the container 
    var container = $("#container");

    var rowSchedule = $("<div>");
    rowSchedule.addClass("row time-block")
    container.append(rowSchedule)
    // loop through the array and add an id of hour[i] to every element
    $(rowSchedule).attr("id", "hour" + "-" + ([i+9])); 
    // i+9 gives the ID an "index" that equals the hour shown on the schedule
    // this will help with the comparison of the current hour


    var timeCol =$("<div>");
    timeCol.text(businessHours[i])
    timeCol.addClass("col-2 col-md-1 hour text-center py-3")
    rowSchedule.append(timeCol);

    var descriptionCol = $("<textarea>");
    descriptionCol.addClass("col-8 col-md-10 description", rows="3");
    rowSchedule.append(descriptionCol);

    var saveBtn = $("<button>");
    saveBtn.addClass("btn saveBtn col-2 col-md-1");
    saveBtn.attr("aria-label", "save")
    rowSchedule.append(saveBtn);
    $(saveBtn).attr("id", "buttonTime" + "-" + ([i+9])); 


    var iInBtn = $("<i>");
    iInBtn.addClass("fas fa-save");
    iInBtn.attr("aria-hidden", "true")
    saveBtn.append(iInBtn)


  }
gg
  // function compareHour(){
    
    var currentHour = dayjs().format("h");
    var currentHourInt = parseInt(currentHour);
    console.log(currentHourInt)

    for (var i=0; i<businessHoursInt.length; i++){
      // if the [i] of id hour is the same as the index of businesshours 
      if (currentHourInt === businessHoursInt[i]) {
        rowSchedule.addClass("present");
        console.log("present")

      }
      else if (currentHourInt < businessHoursInt[i]) {
        rowSchedule.addClass("future");
        console.log("future")

      }
      else if (currentHourInt > businessHoursInt[i]) {
        rowSchedule.addClass("past");
        console.log("past")


      }
      


    }


  // }

// setInterval(compareHour, 1000);

  // add the current hour in a setinterval so it's updating even without a refresh

// creating an hour variable to compare with my array
// compare time on each row with current time


// LOCAL STORAGE 


function saveTasks(){

  var tasksList = {
    descriptionCol: descriptionCol.value
  };

  localStorage.setItem("tasksList", JSON.stringify(tasksList));

}

function renderTasks(){
  // Use JSON.parse() to convert text to JavaScript object
var savedTasks = JSON.parse(localStorage.getItem("tasksList"));
}


$("#buttonTime-9, #buttonTime-10, #buttonTime-11, #buttonTime-12, #buttonTime-13, #buttonTime-14, #buttonTime-15, #buttonTime-16, #buttonTime-17").on("click", function(event){
  event.preventDefault();
  saveTasks();
  renderTasks();

})

// depending on which button was saved, save in that particular hour on local storage





});



  

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



// compare the current time with the time in the array
// add class accordingly (if)
// loop through to add time on each








// PSEUDO CODE



// add class for past, present, future, with colored background
// compare the time on the left with the dayjs time, and adjust color

// create local storage to save the tasks on each line 
// 