namespace fwdSensors {
  
    //% fixedInstances
  export class FwdLTSBtnClient extends modules.ButtonClient {

    constructor(role: string) {
      super(role)
    }

    /**
     * Code to run when a chosen event occurs
     * @param event Button pressed (down), held, released (up)
     */
    //% group="Learn To Solder"
    //% block="on $this $event"
    //% blockId=fwd_touch_on_ltspress
    fwdOnLTSPress(event: jacdac.ButtonEvent, handler: () => void) { this.onEvent(event, handler) }
  }

  //% fixedInstance whenUsed
  export const BTN1 = new FwdLTSBtnClient("BTN1")
  //% fixedInstance whenUsed
  export const BTN2 = new FwdLTSBtnClient("BTN2")
  //% fixedInstance whenUsed
  export const BTN3 = new FwdLTSBtnClient("BTN3")

  //% fixedInstances
  export class FwdLTSLightClient extends fwdSensors.LightsClient {

    constructor(role: string) {
      super(role)
    }

    /**
     * Indicates the brightness of the light bulb. Zero means completely off and 0xffff means completely on.
     * For non-dimmable lights, the value should be clamp to 0xffff for any non-zero value.
     */
    //% group="Learn To Solder"
    //% blockId=jacdac_ltslight_brightness___set
    //% block="set %lights brightness to %value (\\%)"
    //% weight=100
    //% value.min=0
    //% value.max=100
    //% value.defl=100
    setBrightness(value: number) {
      super.setBrightness(value);
    }
  }

  //% fixedInstance whenUsed
  export const RED = new FwdLTSLightClient("RED")
  //% fixedInstance whenUsed
  export const YELLOW = new FwdLTSLightClient("YELLOW")
  //% fixedInstance whenUsed
  export const GREEN = new FwdLTSLightClient("GREEN")
}
  