var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

// define basic list of possible spoken commands
var commands = [ 'sit' , 'stop' , 'stay', 'speak', 'sit down', 'yes', 'no', 'go away', "don't do that"];
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
document.getElementById("speak").onclick = function() {
  recognition.start();
  console.log('Ready to receive a command.');
}

recognition.onresult = function(event) {
  var last = event.results.length - 1;
  var command = event.results[last][0].transcript;

  // print results to console for debugging
  console.log('Result received: ' + command + '.');
  console.log('Confidence: ' + event.results[0][0].confidence);

  // make the cat do some stuff
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  console.log("I didn't recognise that command.");
}

recognition.onerror = function(event) {
  console.log('Error occurred in recognition: ' + event.error);
}