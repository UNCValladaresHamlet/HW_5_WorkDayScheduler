// Displays current day and time 
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//Declared a global variable
var saveBtn = $(".saveBtn"); //Savebtn Jquery


// var currentHour = moment().format("HH"); // Variable for current hour 
// console.log("currentHour:",currentHour) //Console to confirm current hour
// var currentHourInt = parseInt(currentHour); // variable that Returns the currenHour to an integer
// console.log("currentHourInt:",currentHourInt) //Console to confirm that current hour is now an integer

//Function runs whenever the save button is clicked. 
//Records the key/value (input text/current time) for the selected time block
//Alerts the user that the input text has been recorded
saveBtn.on("click", function () { // On-click 
    var currentTimeValue = $(this).parent().attr("id"); //Gets time from ID in selected time block 
    var inputTextValue = $(this).siblings(".description").val(); //Gets input text from CLASS in the selected text area
      localStorage.setItem(currentTimeValue, inputTextValue); // save data in localStorage
      alert('Your Event Has Been Recorded!')
    });


//Load saved data from local storage
//Retrieve item/info from ID and description 
//Does Reappear if user exits the window and loads it again
$('#9-hour .description').val(localStorage.getItem('9-hour'));
$('#10-hour .description').val(localStorage.getItem('10-hour'));
$('#11-hour .description').val(localStorage.getItem('11-hour'));
$('#12-hour .description').val(localStorage.getItem('12-hour'));
$('#13-hour .description').val(localStorage.getItem('13-hour'));
$('#14-hour .description').val(localStorage.getItem('14-hour'));
$('#15-hour .description').val(localStorage.getItem('15-hour'));
$('#16-hour .description').val(localStorage.getItem('16-hour'));
$('#17-hour .description').val(localStorage.getItem('17-hour'));


//function to change background color regarding the current time. Timeblocks to past/present/future 
function currentTimeColor() {
  var currentHour = moment().hours();
  
}

