// light tests
fwdSensors.BTN1.fwdOnPress(jacdac.ButtonEvent.Down, () => {
    fwdSensors.RED.setBrightness(100);
});
fwdSensors.BTN1.fwdOnPress(jacdac.ButtonEvent.Up, () => {
    fwdSensors.RED.setBrightness(0);
});

fwdSensors.BTN2.fwdOnPress(jacdac.ButtonEvent.Down, () => {
    fwdSensors.YELLOW.setBrightness(100);
});
fwdSensors.BTN2.fwdOnPress(jacdac.ButtonEvent.Up, () => {
    fwdSensors.YELLOW.setBrightness(0);
});

fwdSensors.BTN3.fwdOnPress(jacdac.ButtonEvent.Down, () => {
    fwdSensors.GREEN.setBrightness(100);
});
fwdSensors.BTN3.fwdOnPress(jacdac.ButtonEvent.Up, () => {
    fwdSensors.GREEN.setBrightness(0);
});

// button tests
fwdSensors.BTN1.fwdOnPress(jacdac.ButtonEvent.Down, () => console.log("ltsbtn1down"));
fwdSensors.BTN1.fwdOnPress(jacdac.ButtonEvent.Up, () => console.log("ltsbtn1up"));
basic.forever(function () {
    if (fwdSensors.BTN1.fwdIsPressed()) {
        console.log(fwdSensors.BTN1.fwdHoldDuration())
    }
})
fwdSensors.BTN2.fwdOnPress(jacdac.ButtonEvent.Down, () => console.log("ltsbtn2down"));
fwdSensors.BTN2.fwdOnPress(jacdac.ButtonEvent.Up, () => console.log("ltsbtn2up"));
basic.forever(function () {
    if (fwdSensors.BTN2.fwdIsPressed()) {
        console.log(fwdSensors.BTN2.fwdHoldDuration())
    }
})
fwdSensors.BTN3.fwdOnPress(jacdac.ButtonEvent.Down, () => console.log("ltsbtn3down"));
fwdSensors.BTN3.fwdOnPress(jacdac.ButtonEvent.Up, () => console.log("ltsbtn3up"));
basic.forever(function () {
    if (fwdSensors.BTN3.fwdIsPressed()) {
        console.log(fwdSensors.BTN3.fwdHoldDuration())
    }
})
