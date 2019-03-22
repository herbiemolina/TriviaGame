


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

    function decrement() {

    timer--;

     $("#time").html("<h2>" + timer + "</h2>");


    if (timer === 0) {

      stop();

      alert("Time Up!");
    }
  }

  
function stop() {

   clearInterval(intervalId);
    clockRunning = false;
  }


  // ajax call to trivia api
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response) {
    console.log(response);

    // write content to html. object has numbers and js doesn't like numbers.
    $("#q").html("<h1>" + response.results[0].question + "</h1>");
  })
  
}