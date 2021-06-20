import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'buildAutoTip'
})
export class BuildAutoTipPipe implements PipeTransform {

  transform(errors: { [p: string]: any }, label = 'Thuộc tính này'): Record<string, Record<string, string>> {
    if (errors) {
      return {
        default: {
          required: label + ' không thể để trống',
          min: label + ' vượt quá giá trị cho phép',
          not_match: label + ' không khớp với ' + errors.not_match
        }
      };
    } else {
      return {};
    }
  }

}
