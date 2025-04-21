fwdSensors.BTN1.fwdOnPress(jacdac.ButtonEvent.Down, () => {
    console.log("ltsbtn1down")
    fwdSensors.RED.setBrightness(100);
});

fwdSensors.BTN1.fwdOnPress(jacdac.ButtonEvent.Up, () => {
    console.log("ltsbtn1up")
    fwdSensors.RED.setBrightness(0);
});

basic.forever(function () {
    if (fwdSensors.BTN1.fwdIsPressed()) {
        console.log(fwdSensors.BTN1.fwdHoldDuration())
    }
})


fwdSensors.BTN2.fwdOnPress(jacdac.ButtonEvent.Down, () => {
    console.log("ltsbtn2down")
    fwdSensors.YELLOW.setBrightness(100);
});

fwdSensors.BTN2.fwdOnPress(jacdac.ButtonEvent.Up, () => {
    console.log("ltsbtn2up")
    fwdSensors.YELLOW.setBrightness(0);
});

basic.forever(function () {
    if (fwdSensors.BTN2.fwdIsPressed()) {
        console.log(fwdSensors.BTN2.fwdHoldDuration())
    }
})


fwdSensors.BTN3.fwdOnPress(jacdac.ButtonEvent.Down, () => {
    console.log("ltsbtn3down")
    fwdSensors.GREEN.setBrightness(100);
});

fwdSensors.BTN3.fwdOnPress(jacdac.ButtonEvent.Up, () => {
    console.log("ltsbtn3up")
    fwdSensors.GREEN.setBrightness(0);
});

basic.forever(function () {
    if (fwdSensors.BTN3.fwdIsPressed()) {
        console.log(fwdSensors.BTN3.fwdHoldDuration())
    }
})
