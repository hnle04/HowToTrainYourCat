$("info").click(function() {
})

$("button.buttonA.button-settings").click(function() {
  // display settings modal
})

$("button.button.button1").click(function() {
  // cat MAY sit
  let prob = Math.floor(Math.random() * 101);
  console.log("Probablity = " + prob);

  if (prob < 25)
  {
    console.log("sit");
  }
})

$("button.button.button2").click(function() {
  // cat MAY speak
  let prob = Math.floor(Math.random() * 101);
  console.log("Probablity = " + prob);
  
  if (prob < 30)
  {
    console.log("speak");
  }
})

$("button.button.button3").click(function() {
  // cat MAY stay
  let prob = Math.floor(Math.random() * 101);
  console.log("Probablity = " + prob);
  
  if (prob < 20)
  {
    console.log("stay");
  }
})

$("button.button.button4").click(function() {
  // cat MAY stop
  let prob = Math.floor(Math.random() * 101);
  console.log("Probablity = " + prob);
  
  if (prob < 15)
  {
    console.log("stop");
  }
})
