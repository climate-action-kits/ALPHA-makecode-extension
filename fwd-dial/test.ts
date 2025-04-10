// rotary encoder tests
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, (difference) => console.log("turned -> position " + fwdSensors.dial1.fwdPosition()));
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, (difference) => console.log("turned <- position " + + fwdSensors.dial1.fwdPosition()));

// button tests
fwdSensors.dialButton1.fwdOnPress(jacdac.ButtonEvent.Down, () => console.log("dialdown"));
fwdSensors.dialButton1.fwdOnPress(jacdac.ButtonEvent.Up, () => console.log("dialup"));
basic.forever(function () {
    if (fwdSensors.dialButton1.fwdIsPressed()) {
        console.log(fwdSensors.dialButton1.fwdHoldDuration())
    }
})
