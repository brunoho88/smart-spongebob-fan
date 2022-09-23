let degree = 0
let strip: neopixel.Strip = null
let range: neopixel.Strip = null
input.onButtonPressed(Button.A, function () {
    degree = input.compassHeading()
    if (degree < 45) {
        basic.showString("N")
        basic.showArrow(ArrowNames.North)
    } else if (degree < 135) {
        basic.showString("E")
        basic.showArrow(ArrowNames.East)
    } else if (degree < 225) {
        basic.showString("S")
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showString("W")
        basic.showArrow(ArrowNames.West)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        strip = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)
        range = strip.range(0, 7)
        strip.showRainbow(1, 360)
    }
})
