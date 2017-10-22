/**
 * 0 - walk --> sit
 * 1 - running 
 * 2 - running 
 * 3 - meowing
 */
var currCatState = 0;
var newCatState = 0;

function changeCatState(newCS)
{
  if (newCS !== 0 && newCS !== 1 && newCS !== 2)
  {
    newCatState = Math.floor(Math.random() * 3);
  }

  setTimeout(function () {
      if (currCatState === newCatState)
      {
        return;
      }

      if (currCatState === 0)
      {
        $('#tuna').removeClass('tuna-walk-sit');
      }
      else if (currCatState === 1)
      {
        $('#tuna').removeClass('tuna-running');
      }
      else if (currCatState === 2)
      {
        $('#tuna').removeClass('tuna-walk');
      }

      if (newCatState === 0)
      {
        $('#tuna').addClass('tuna-walk-sit');
      }
      else if (newCatState === 1)
      {
        $('#tuna').addClass('tuna-running');
      }
      else if (newCatState === 2)
      {
        $('#tuna').addClass('tuna-walk');
      }
      currCatState = newCatState;
      return;
  }, 500);

  
  return;
}

$("#info").click(function() {
  // display information about the app and helping rescue animals
  console.log("I wanna see some info!");
});

$("#sit").click(function() {
  // cat MAY sit
  let prob = Math.floor(Math.random() * 101);
  console.log("Probablity = " + prob);

  if (prob < 25)
  {
    console.log("sit");
    newCatState = 0;
    changeCatState(newCatState);
  }
  else
  {
    changeCatState(-1);
  }
})

$("#meow").click(function() {
  // cat MAY speak
  let prob = Math.floor(Math.random() * 101);
  console.log("Probablity = " + prob);
  
  if (prob < 30)
  {
    console.log("speak");
    //play audio
    changeCatState(-1);
  }
})

$("#stay").click(function() {
  // cat MAY stay
  let prob = Math.floor(Math.random() * 101);
  console.log("Probablity = " + prob);
  
  if (prob < 20)
  {
    console.log("stay");
    newCatState = 1;
    changeCatState(newCatState);
  }
  else
  {
    changeCatState(-1);
  }
})

$("#stop").click(function() {
  // cat MAY stop
  let prob = Math.floor(Math.random() * 101);
  console.log("Probablity = " + prob);
  
  if (prob < 15)
  {
    console.log("stop");
    newCatState = 2;
    changeCatState(newCatState);
  }
  else
  {
    changeCatState(-1);
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
