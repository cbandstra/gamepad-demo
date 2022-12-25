control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (lastValue != control.eventValue()) {
        lastValue = control.eventValue()
        led.stopAnimation()
        if (control.eventValue() == 1) {
            basic.showString("A")
            MotorSpeed_L = 255
            MotorSpeed_R = 255
        } else if (control.eventValue() == 3) {
            basic.showString("B")
            if (MotorSpeed_L != 0 || MotorSpeed_R != 0) {
                MotorSpeed_L = 0
                MotorSpeed_R = 0
            } else {
                MotorSpeed_L = -255
                MotorSpeed_R = -255
            }
        } else if (control.eventValue() == 5) {
            basic.showString("C")
            MotorSpeed_L = -255
            MotorSpeed_R = 255
        } else if (control.eventValue() == 7) {
            basic.showString("D")
            MotorSpeed_L = 255
            MotorSpeed_R = -255
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
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        MotorSpeed_L,
        SuperBit.enMotors.M3,
        MotorSpeed_R
        )
    }
})
let MotorSpeed_R = 0
let MotorSpeed_L = 0
let lastValue = 0
lastValue = 0
bluetooth.startLEDService()
