import {BaseField, SelectDateTimeField} from 'mht-test-libraries';

export class CreateAtField extends SelectDateTimeField {
  constructor(option: Partial<SelectDateTimeField> = {}) {
    const init = {
      key: 'createAt',
      label: 'Ngay Tao'
    };
    super({...init, ...option});
  }
}
