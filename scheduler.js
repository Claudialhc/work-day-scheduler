//create variables for current day and time
var currentTime = parseInt(moment().format("HH"));
var button = document.querySelector(".savebtn");

var timeEl = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

//use moment.js to figure out how to create the date at the top of the planner
var currentDay = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDay);
//business hours are alreeady presented but you have to make the hour blocks populate all throughtout the calendar 9-5
//create if statements for the change of hours
var descriptionArray = $(".description");
for (var i = 0; i < descriptionArray.length; i++) {
  var id = parseInt(descriptionArray[i].getAttribute("id"));
  if (currentTime > id) {
    descriptionArray[i].classList.add("past");
  } else if (currentTime === id) {
    descriptionArray[i].classList.add("present");
  } else if (currentTime < id) {
    descriptionArray[i].classList.add("future");
  }
}

//figure out how to create the look for the color block change
//make the time blocks coordinate with the time of the day... gray=past, green=future, red=present
//make save button active
$(".saveBtn").on("click", function () {
  var btnId = $(this).attr("id");
  var id = btnId.replace("btn", "");
  var task = $("#" + id).val();
  localStorage.setItem(id, task);
});

//when the page is refreshed- the text written on the blocks is saved (local storage)
var task9 = localStorage.getItem("9");
var task10 = localStorage.getItem("10");
var task11 = localStorage.getItem("11");
var task12 = localStorage.getItem("12");
var task13 = localStorage.getItem("13");
var task14 = localStorage.getItem("14");
var task15 = localStorage.getItem("15");
var task16 = localStorage.getItem("16");
var task17 = localStorage.getItem("17");
$("#9").val(task9); 
$("#9").val(task10); 
$("#9").val(task10); 
$("#9").val(task11); 
$("#9").val(task12); 
$("#9").val(task13); 
$("#9").val(task14); 
$("#9").val(task15); 
