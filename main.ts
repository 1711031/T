music.setVolume(255)
basic.forever(function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P2,
    PingUnit.Centimeters
    )))
    basic.showNumber(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ))
})
basic.forever(function () {
    music.playMelody("E D G F B A C5 B ", 120)
    basic.pause(200)
    music.playMelody("G F G A - F E D ", 120)
})
