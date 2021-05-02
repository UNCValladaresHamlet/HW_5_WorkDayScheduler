// Displays current day and time 
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//Declared a global variable
var saveBtn = $(".saveBtn"); //Savebtn jquery 
var currentHour = moment().format("HH"); // Variable for current hour 
// console.log("currentHour:",currentHour) Console to confirm current hour
var currentHourInt = parseInt(currentHour); // variable that Returns the currenHour to an integer
// console.log("currentHourInt:",currentHourInt) //Console to confirm that current hour is now an integer


saveBtn.on("click", function () { // On-click 
    var currentTimeValue = $(this).parent().attr("id"); //Gets time from ID in selected time block 
    var inputTextValue = $(this).siblings(".description").val(); //Gets input text from CLASS in the selected text area
      localStorage.setItem(currentTimeValue, inputTextValue); // save data in localStorage
      alert('Your Event Has Been Recorded!')
    });


//load saved data from local storage
//Retrieve item/info from ID and description 

$('#9th-hour .description').val(localStorage.getItem('9th-hour'));
$('#10th-hour .description').val(localStorage.getItem('10th-hour'));
$('#11th-hour .description').val(localStorage.getItem('11th-hour'));
$('#12th-hour .description').val(localStorage.getItem('12th-hour'));
$('#13th-hour .description').val(localStorage.getItem('13th-hour'));
$('#14th-hour .description').val(localStorage.getItem('14th-hour'));
$('#15th-hour .description').val(localStorage.getItem('15th-hour'));
$('#16th-hour .description').val(localStorage.getItem('16th-hour'));
$('#17th-hour .description').val(localStorage.getItem('17th-hour'));


//function to change background color regarding the current time. Timeblocks to past/present/future 
function currentTimeColor() {




}