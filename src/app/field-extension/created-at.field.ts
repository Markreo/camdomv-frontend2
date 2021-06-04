import {SelectDateTimeField} from 'mht-test-libraries';

export class CreatedAtField extends SelectDateTimeField {
  constructor(option: Partial<SelectDateTimeField> = {}) {
    const init = {
      key: 'createdAt',
      label: 'Ngay Tao'
    };
    super({...init, ...option});
  }
}
