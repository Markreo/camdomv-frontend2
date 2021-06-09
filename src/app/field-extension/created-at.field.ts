import {SelectDateTimeField} from 'mht-test-libraries';

export class CreatedAtField extends SelectDateTimeField {
  constructor(option: Partial<SelectDateTimeField> = {}) {
    const init = {
      key: 'createdAt',
      label: 'Ngày tạo'
    };
    super({...init, ...option});
  }
}
