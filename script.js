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