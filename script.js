/**
 * 0 - walk --> sit
 * 1 - running 
 * 2 - running 
 * 3 - meowing
 */
var currCatState = 0;
var newCatState = 0;

function changeCatState(newCS) {
  if (newCS !== 0 && newCS !== 1 && newCS !== 2) {
    newCatState = Math.floor(Math.random() * 3);
  }

  setTimeout(function () {
    // don't do anything if staying the same state
    if (currCatState === newCatState) {
      return;
    }

    // remove current class and add new class
    if (newCatState === 0) {
      $('#tuna').addClass('tuna-sit');
    }
    else if (newCatState === 1) {
      $('#tuna').addClass('tuna-running');
    }
    else if (newCatState === 2) {
      $('#tuna').addClass('tuna-walk');
    }
    if (currCatState === 0) {
      $('#tuna').removeClass('tuna-walk-sit');
      $('#tuna').removeClass('tuna-sit');
    }
    else if (currCatState === 1) {
      $('#tuna').removeClass('tuna-running');
    }
    else if (currCatState === 2) {
      $('#tuna').removeClass('tuna-walk');
    }



    // randomly play meowing sounds
    if (Math.floor(Math.random() * 101) < 30) {
      $('#meow-sound').trigger('play');
    }

    currCatState = newCatState;
    return;
  }, 500);


  return;
}

$("#info").click(function () {
  // display information about the app and helping rescue animals
  console.log("I wanna see some info!");
});

$("#sit").click(function () {
  // cat MAY sit
  let prob = Math.floor(Math.random() * 101);
  console.log("Probablity = " + prob);

  if (prob < 25) {
    console.log("sit");
    newCatState = 0;
    changeCatState(newCatState);
  }
  else {
    changeCatState(-1);
  }
})

$("#meow").click(function () {
  // cat MAY speak
  let prob = Math.floor(Math.random() * 101);
  console.log("Probablity = " + prob);

  if (prob < 30) {
    console.log("speak");
    //play audio
    $('#meow-sound').trigger('play');
    changeCatState(-1);
  }
})

$("#run").click(function () {
  // cat MAY run
  let prob = Math.floor(Math.random() * 101);
  console.log("Probablity = " + prob);

  if (prob < 20) {
    console.log("run");
    newCatState = 1;
    changeCatState(newCatState);
  }
  else {
    changeCatState(-1);
  }
})

$("#walk").click(function () {
  // cat MAY walk
  let prob = Math.floor(Math.random() * 101);
  console.log("Probablity = " + prob);

  if (prob < 15) {
    console.log("stop");
    newCatState = 2;
    changeCatState(newCatState);
  }
  else {
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
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/**
 * Speech Recognition portion of the code
 */
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

// define basic list of possible spoken commands
var commands = ['sit', 'stop', 'stay', 'speak', 'sit down', 'yes', 'no', 'go away', "don't do that", 'run', 'jump', 'shake', 'come', 'come here', 'walk', 'talk', 'meow'];
var grammar = '#JSGF V1.0; grammar commands; public <commands> = ' + commands.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// start the recognition when the user clicks the speak button
$("#speak").click(function () {
  recognition.start();
  console.log('Ready to receive a command.');
});

recognition.onresult = function (event) {
  var last = event.results.length - 1;
  var command = event.results[last][0].transcript;

  // print results to console for debugging
  console.log('Result received: ' + command + '.');
  console.log('Confidence: ' + event.results[0][0].confidence);

  // output for users to see
  $('#input').text("You told the cat to " + command);

  // make the cat do some stuff
  if (command === 'sit' || command === 'stay' || command === 'stop' || command === 'sit down') {
    // cat MAY sit
    let prob = Math.floor(Math.random() * 101);
    console.log("Probablity = " + prob);

    if (prob < 25) {
      console.log("sit");
      newCatState = 0;
      changeCatState(newCatState);
    }
    else {
      changeCatState(-1);
    }
  }
  else if (command === 'meow' || command === "speak" || command === "talk") {
    // cat MAY speak
    let prob = Math.floor(Math.random() * 101);
    console.log("Probablity = " + prob);

    if (prob < 30) {
      console.log("speak");
      //play audio
      $('#meow-sound').trigger('play');
      changeCatState(-1);
    }
  }
  else if (command === 'run' || command === 'go away' || command === 'come here') {
    // cat MAY run
    let prob = Math.floor(Math.random() * 101);
    console.log("Probablity = " + prob);

    if (prob < 20) {
      console.log("run");
      newCatState = 1;
      changeCatState(newCatState);
    }
    else {
      changeCatState(-1);
    }
  }
  else if (command === 'walk' || command === 'come here' || command === 'come') {
    // cat MAY walk
    let prob = Math.floor(Math.random() * 101);
    console.log("Probablity = " + prob);

    if (prob < 15) {
      console.log("stop");
      newCatState = 2;
      changeCatState(newCatState);
    }
    else {
      changeCatState(-1);
    }
  }
}

recognition.onspeechend = function () {
  recognition.stop();
}

recognition.onnomatch = function (event) {
  console.log("I didn't recognise that command.");
}

recognition.onerror = function (event) {
  console.log('Error occurred in recognition: ' + event.error);
}
