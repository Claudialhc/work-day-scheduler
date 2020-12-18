//The "HH" after format signifies military time compare to h for regular time.
var currentTime = parseInt(moment().format("HH"));
var button = document.querySelector(".savebtn");

var timeEl = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

//Used momentjs to have the date at the top of the planner populate with the current date
var currentDay = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDay);

//if/else if statements created to change the color of the time blocks according to the current time. 
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

//js below was used to make the saved buttons work
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
$("#10").val(task10); 
$("#11").val(task10); 
$("#12").val(task11); 
$("#13").val(task12); 
$("#14").val(task13); 
$("#15").val(task14); 
$("#16").val(task15); 
$("#17").val(task15); 
