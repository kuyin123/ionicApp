import {Pipe, PipeTransform} from "@angular/core"

@Pipe({name: "senorSettingsDetailsPipe"})
export class SensorSettingsDetailsPipe implements PipeTransform {
  transform(alarmLevle: number): string {
    let resLv: string = '';
    switch (alarmLevle) {
      case 1:
        resLv = "Ⅰ";
        break;
      case 2:
        resLv = "Ⅱ";
        break;
      case 3:
        resLv = "Ⅲ";
        break;
      case 4:
        resLv = "Ⅳ";
        break;
      case 0:
        resLv = "自定义";
        break;
    }
    return resLv;
  }
}
