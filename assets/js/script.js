$(document).ready(function () {
    // This function displays the current date and time in real-time
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    function update() {
        $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }
    setInterval(update, 1000);

    // This function allows text to be saved to the text area and local storage
    $('.saveBtn').on('click', function () {
        var taskTime = $(this).siblings('.hour').text();
        var taskValue = $(this).siblings('.description').val();

        console.log(taskValue, taskTime);
        localStorage.setItem(taskTime, taskValue);
    })
    // allows items in local storage to be displayed in the text area
    $('#9AM').val(localStorage.getItem('9AM'));
    $('#10AM').val(localStorage.getItem('10AM'));
    $('#11AM').val(localStorage.getItem('11AM'));
    $('#12PM').val(localStorage.getItem('12PM'));
    $('#1PM').val(localStorage.getItem('1PM'));
    $('#2PM').val(localStorage.getItem('2PM'));
    $('#3PM').val(localStorage.getItem('3PM'));
    $('#4PM').val(localStorage.getItem('4PM'));
    $('#5PM').val(localStorage.getItem('5PM'));
})

var saveBtn = document.querySelectorAll(".saveBtn"); 

//loop for save buttons and add values to local storage 

for (i of saveBtn) {
    i.addEventListener("click", function() {
      var calendarText = $(this).siblings(".description").val();
      var block = $(this).parent().attr("id");
    localStorage.setItem(block, calendarText);
    });    
  };

//check current time 
function checkTime () {

    var currentTime = moment().hour();
    console.log(currentTime);

    $(".time-block").each(function() {

        var thisTimeBlock = parseInt($(this).attr("id").split("-")[1]);

        if(thisTimeBlock < currentTime) {
            $(this).children().addClass("past");
        } else if (thisTimeBlock === currentTime) {
            $(this).children().addClass("present");
        } else {
            $(this).children().addClass("future")
        }
    })
}
  
