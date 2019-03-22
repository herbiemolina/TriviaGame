

//  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>


var timer = 90;
var correct = 0;
var incorrect = 0;
var intervalId;
var clockRunning = false;

var queryURL = "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple"

window.onload= function (){




  $("#start").on("click", start);

 
  function start() {
    
    if (!clockRunning) {
     intervalId = setInterval(decrement, 1000);
     clockRunning = true;
     console.log("string")
  }
  }

   //  The decrement function.
   function decrement() {

    //  Decrease number by one.
    timer--;

    //  Show the number in the #time tag.
    $("#time").html("<h2>" + timer + "</h2>");


    //  Once number hits zero...
    if (timer === 0) {

      //  ...run the stop function.
      stop();

      //  Alert the user that time is up.
      alert("Time Up!");
    }
  }

  
function stop() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  }
}