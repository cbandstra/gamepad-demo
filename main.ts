control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (lastValue != control.eventValue()) {
        lastValue = control.eventValue()
        led.stopAnimation()
        if (control.eventValue() == 1) {
            basic.showString("A")
        } else if (control.eventValue() == 3) {
            basic.showString("B")
        } else if (control.eventValue() == 5) {
            basic.showString("C")
        } else if (control.eventValue() == 7) {
            basic.showString("D")
        } else if (control.eventValue() == 9) {
            basic.showString("1")
        } else if (control.eventValue() == 11) {
            basic.showString("2")
        } else if (control.eventValue() == 13) {
            basic.showString("3")
        } else if (control.eventValue() == 15) {
            basic.showString("4")
        } else {
            basic.clearScreen()
        }
    }
})
let lastValue = 0
lastValue = 0
bluetooth.startLEDService()
basic.showString("GAMEPAD DEMO")
