fwdSensors.BTN1.fwdOnTouch(jacdac.ButtonEvent.Down, () => {
    fwdSensors.RED.setBrightness(100);
});
fwdSensors.BTN1.fwdOnTouch(jacdac.ButtonEvent.Up, () => {
    fwdSensors.RED.setBrightness(0);
});

fwdSensors.BTN2.fwdOnTouch(jacdac.ButtonEvent.Down, () => {
    fwdSensors.YELLOW.setBrightness(100);
});
fwdSensors.BTN2.fwdOnTouch(jacdac.ButtonEvent.Up, () => {
    fwdSensors.YELLOW.setBrightness(0);
});

fwdSensors.BTN3.fwdOnTouch(jacdac.ButtonEvent.Down, () => {
    fwdSensors.GREEN.setBrightness(100);
});
fwdSensors.BTN3.fwdOnTouch(jacdac.ButtonEvent.Up, () => {
    fwdSensors.GREEN.setBrightness(0);
});
