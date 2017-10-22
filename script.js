$("#info").click(function() {
  // display information about the app and helping rescue animals
  console.log("I wanna see some info!");
});

$("#settings").click(function() {
  // display settings modal
  console.log("choices~");
})

$("#sit").click(function() {
  // cat MAY sit
  let prob = Math.floor(Math.random() * 101);
  console.log("Probablity = " + prob);

  if (prob < 25)
  {
    console.log("sit");
  }

  $('#tuna').removeClass("tuna-walk-sit");
  $('#tuna').addClass("tuna-running");
})

$("#meow").click(function() {
  // cat MAY speak
  let prob = Math.floor(Math.random() * 101);
  console.log("Probablity = " + prob);
  
  if (prob < 30)
  {
    console.log("speak");
  }
})

$("#stay").click(function() {
  // cat MAY stay
  let prob = Math.floor(Math.random() * 101);
  console.log("Probablity = " + prob);
  
  if (prob < 20)
  {
    console.log("stay");
  }
})

$("#stop").click(function() {
  // cat MAY stop
  let prob = Math.floor(Math.random() * 101);
  console.log("Probablity = " + prob);
  
  if (prob < 15)
  {
    console.log("stop");
  }
})

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("info");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
