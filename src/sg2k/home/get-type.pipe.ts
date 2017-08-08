import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({ name: 'getType' })
export class GetTypePipe implements PipeTransform {
  transform(type: number): string {
    //let exp = parseFloat(exponent);
    //return Math.pow(value, isNaN(exp) ? 1 : exp);
    let reType: string
    switch (type) {
      case 1:
        reType = 'good';//良好
        break;
      case 2:
        reType = 'normal';//正常
        break;
      case 3:
        reType = 'accept';//可容忍
        break;
      case 4:
        reType = 'disallow';//不允许
        break;
      default:
        reType = 'outline';//不在线
        break;
    }
    return reType;
  }
}
