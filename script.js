var currentDay = $("#currentDay")

function displayTime(){
  var today = dayjs();
  $(currentDay).text(today.format("dddd, MMMM D YYYY"));
  var currentHour = dayjs().format("hh");
}
setInterval(displayTime, 1000);


function renderTasks(){
  // Use JSON.parse() to convert text to JavaScript object
  var hoursTextObj = JSON.parse(localStorage.getItem("hoursTextObj")) || {
    9: "", 
    10: "",
    11: "", 
    12: "", 
    13: "", 
    14: "", 
    15: "", 
    16: "", 
    17: ""
  };

  var businessHoursInt = [9, 10, 11, 12, 13, 14, 15, 16, 17]
  var businessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

  var currentHour = dayjs().hour();
  var currentHourInt = parseInt(currentHour);


  for (var i=0; i<businessHours.length; i++){
    // for each element of the array, so each business hour
    // create a div which is my row, with 3 columns, one for the time, one for the description, one for the save button
    // add the classes for each, and append to the container 
    var container = $("#container");

    var rowSchedule = $("<div>");
    rowSchedule.addClass("row time-block")
    container.append(rowSchedule)
    // loop through the array and add an id of hour[i] to every element
    $(rowSchedule).attr("id", i+9); 
    // i+9 gives the ID an "index" that equals the hour shown on the schedule
    // this will help with the comparison of the current hour


    var timeCol =$("<div>");
    timeCol.text(businessHours[i])
    timeCol.addClass("col-2 col-md-1 hour text-center py-3")
    rowSchedule.append(timeCol);

    var descriptionCol = $("<textarea>");
    descriptionCol.addClass("col-8 col-md-10 description", rows="3");

    descriptionCol.text(hoursTextObj[i + 9]);
    rowSchedule.append(descriptionCol);

    var saveBtn = $("<button>");
    saveBtn.addClass("btn saveBtn col-2 col-md-1");
    saveBtn.attr("aria-label", "save")
    rowSchedule.append(saveBtn);


    var iInBtn = $("<i>");
    iInBtn.addClass("fas fa-save");
    iInBtn.attr("aria-hidden", "true")
    saveBtn.append(iInBtn)

    // console.log("currentHourInt", currentHourInt, typeof currentHourInt);
    // console.log("businessHoursInt[i]", businessHoursInt[i], typeof businessHoursInt[i])

    if (currentHourInt === businessHoursInt[i]) {
      rowSchedule.addClass("present");
  
    }
    else if (currentHourInt < businessHoursInt[i]) {
      rowSchedule.addClass("future");
  
    }
    else if (currentHourInt > businessHoursInt[i]) {
      rowSchedule.addClass("past");
  
    }
  }
    
}


$("#container").on("click", ".saveBtn", function(event){
  event.preventDefault();

  var textValue = $(this).siblings(".description").val()
  var hourId = $(this).parent().attr("id");

  var hoursTextObj = JSON.parse(localStorage.getItem("hoursTextObj")) || {
    9: "", 
    10: "",
    11: "", 
    12: "", 
    13: "", 
    14: "", 
    15: "", 
    16: "", 
    17: ""
  };

  hoursTextObj[hourId] = textValue;

  localStorage.setItem("hoursTextObj", JSON.stringify(hoursTextObj));
  renderTasks();
})



renderTasks();
