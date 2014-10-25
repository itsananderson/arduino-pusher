var five = require("johnny-five"),
  board, ping;

board = new five.Board({port:process.argv[2]});

board.on("ready", function() {

  console.log('here');

  // Create a new `ping` hardware instance.
  ping = new five.Ping(9);

  console.log('after');
  // Properties

  // ping.microseconds
  //
  // Roundtrip distance in microseconds
  //

  // ping.inches
  //
  // Calculated distance to object in inches
  //

  // ping.cm
  //
  // Calculated distance to object in centimeters
  //


  // Ping Event API

  // "data" get the current reading from the ping
  ping.on("data", function(err, value) {
    console.log("data", value);
  });

  ping.on("change", function(err, value) {

    console.log(typeof this.inches);
    console.log("Object is " + this.inches + "inches away");
  });
});
