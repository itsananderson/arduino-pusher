var five = require('johnny-five'),
    board, potent1, servo1, servo2;

var port = 'COM2';
if (process.argv.length > 2) {
    port = process.argv[2];
}

board = new five.Board({port:port});

board.on('ready', function () {

    potent1 = new five.Sensor({
        pin: 'A0',
        freq: 100
    });

    servo1 = new five.Servo(8);
    servo2 = new five.Servo(9);

    potent1.on('data', function() {
        var rawValue = this.raw;
        console.log(rawValue);
        servo1.to(five.Fn.map(rawValue, 0, 1023, 90, 0));
        servo2.to(five.Fn.map(rawValue, 0, 1023, 90, 179));
    });
});
