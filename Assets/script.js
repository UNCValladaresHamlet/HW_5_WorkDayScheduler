// display current day on page
$('#currentDay').text(moment().format('dddd, MMMM Do'));

$(document).ready(function(){
  console.log("function:")
     $('.saveBtn').on('click', function () {
        console.log("click:")
        // get nearby values
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    // save in localStorage
    localStorage.setItem(time, value);
    // Show notification that item was saved to localStorage by adding class 'show'
    $('.notification').addClass('show');
    // Timeout to remove 'show' class after 5 seconds
    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 5000);
        

  });
     function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();
    // loop over time blocks
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);
      // check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }
  hourUpdater();

     // set up interval to check if current time needs to be updated
  var interval = setInterval(hourUpdater, 15000);
  // load any saved data from localStorage
  $('9th_hour .description').val(localStorage.getItem('hour-9'));
  $('10th_hour .description').val(localStorage.getItem('hour-10'));
  $('11th_hour .description').val(localStorage.getItem('hour-11'));
  $('12th_hour .description').val(localStorage.getItem('hour-12'));
  $('13th_hour .description').val(localStorage.getItem('hour-13'));
  $('14th_hour .description').val(localStorage.getItem('hour-14'));
  $('15th_hour .description').val(localStorage.getItem('hour-15'));
  $('16th_hour .description').val(localStorage.getItem('hour-16'));
  $('17th_hour .description').val(localStorage.getItem('hour-17'));
});

