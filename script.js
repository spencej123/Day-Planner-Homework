//Starting With Moment.js
let currentDate =
  moment().format("dddd") + " " + moment().format("Do MMM YYYY");
let currentHour = moment().format("h:mm:ss a");
//Making the Time/hour Variables/Use jquery to call id from html
let nineAm = $("#9am");
let tenAm = $("#10am");
let elevenAm = $("#11am");
let twelvePm = $("#12pm");
let onePm = $("#13pm");
let twoPm = $("#14pm");
let threePm = $("#15pm");
let fourPm = $("#16pm");
let fivePm = $("#17pm");

let hour = moment().hours();
let userInput;
let hourSpan;
//Date/Time/hours-String
let interval = setInterval(function () {
  let momentNow = moment();
  $("#currentDay").html(
    momentNow.format("YYYY MMMM DD") +
      " " +
      momentNow.format("dddd").substring(0, 3).toUpperCase()
  );
  $("#currentDay").html(currentDate + " " + momentNow.format("hh:mm:ss A"));
}, 100);

function initPage() {
  console.log("Current Hour " + hour);
  let init9 = JSON.parse(localStorage.getItem("09:00 am"));
  nineAm.val(init9);

  let init10 = JSON.parse(localStorage.getItem("10:00 am"));
  tenAm.val(init10);

  let init11 = JSON.parse(localStorage.getItem("11:00 am"));
  elevenAm.val(init11);

  let init12 = JSON.parse(localStorage.getItem("12:00 pm"));
  twelvePm.val(init12);

  let init1 = JSON.parse(localStorage.getItem("01:00 pm"));
  onePm.val(init1);

  let init2 = JSON.parse(localStorage.getItem("02:00 pm"));
  twoPm.val(init2);

  let init3 = JSON.parse(localStorage.getItem("03:00 pm"));
  threePm.val(init3);

  let init4 = JSON.parse(localStorage.getItem("04:00 pm"));
  fourPm.val(init4);

  let init5 = JSON.parse(localStorage.getItem("05:00 pm"));
  fivePm.val(init5);
}

function background() {
  $(".form-control").each(function () {
    let timeTest = parseInt($(this).attr("id"));
    hour = parseInt(hour);
    console.log(timeTest);
    console.log(hour);

    if (hour > timeTest) {
      $(this).addClass("past");
    } else if (hour < timeTest) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

$(document).ready(function () {
  initPage();
  background();

  //Button Functions

  $(".saveBtn").on("click", function () {
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));
  });

  $("#clearDay").on("click", function () {
    localStorage.clear();
    initPage();
  });
});
