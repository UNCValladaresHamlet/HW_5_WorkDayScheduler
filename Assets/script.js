// Displays current day and time 
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//Declared a global variable
var saveBtn = $(".saveBtn"); //Savebtn Jquery


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
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

//Changes color of time block
//Checks current time and compares it to the current time block
//The time block color will represent past(gray)/present(red)/future(green) based on the function
function currentTimeColor() {
 
var currentHour = moment().format("HH"); // Variable for current hour 
console.log("currentHour:",currentHour) //Console to confirm current hour
var currentHourInt = parseInt(currentHour); // variable that Returns the currenHour to an integer
console.log("currentHourInt:",currentHourInt) //Console to confirm that current hour is now an integer
  
  $('.time-block').each(function () {
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
  
    console.log(blockHour)
    if (blockHour < currentHourInt) {
      $(this).addClass('past');
    } else if (blockHour === currentHourInt) {
      $(this).removeClass('past');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}
currentTimeColor();
