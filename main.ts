radio.setGroup(1)
basic.forever(function () {
    if (grove.getJoystick(AnalogPin.P1, AnalogPin.P2) == 0) {
        radio.sendNumber(0)
        basic.showIcon(IconNames.SmallDiamond)
    } else if (grove.getJoystick(AnalogPin.P1, AnalogPin.P2) == 1) {
        radio.sendNumber(1)
        basic.showArrow(ArrowNames.North)
    } else if (grove.getJoystick(AnalogPin.P1, AnalogPin.P2) == 2) {
        radio.sendNumber(2)
        basic.showArrow(ArrowNames.South)
    } else if (grove.getJoystick(AnalogPin.P1, AnalogPin.P2) == 3) {
        radio.sendNumber(3)
        basic.showArrow(ArrowNames.East)
    } else if (grove.getJoystick(AnalogPin.P1, AnalogPin.P2) == 4) {
        radio.sendNumber(4)
        basic.showArrow(ArrowNames.West)
    } else if (grove.getJoystick(AnalogPin.P1, AnalogPin.P2) == 5) {
        radio.sendNumber(5)
        basic.showArrow(ArrowNames.SouthEast)
    } else if (grove.getJoystick(AnalogPin.P1, AnalogPin.P2) == 6) {
        radio.sendNumber(6)
        basic.showArrow(ArrowNames.NorthEast)
    } else if (grove.getJoystick(AnalogPin.P1, AnalogPin.P2) == 7) {
        radio.sendNumber(7)
        basic.showArrow(ArrowNames.SouthWest)
    } else if (grove.getJoystick(AnalogPin.P1, AnalogPin.P2) == 8) {
        radio.sendNumber(8)
        basic.showArrow(ArrowNames.NorthWest)
    } else if (grove.getJoystick(AnalogPin.P1, AnalogPin.P2) == 9) {
        radio.sendNumber(9)
        basic.showIcon(IconNames.Target)
    }
})
