import {Pipe, PipeTransform} from "@angular/core"

@Pipe({name: "batteryPipe"})
export class BatteryPipe implements PipeTransform {
  transform(batteryVal: number): string {
    let resVal: string = '';
    if (batteryVal <= 0 ) { // 电量为0
      resVal = '#ccc';
    } else if (batteryVal > 0 && batteryVal <= 30) { // 电量大于0, 且小于等于30
      resVal = '#F24949';
    } else { // 电量大于30
      resVal = '#43BF6C';
    }
    return resVal;
  }
}
