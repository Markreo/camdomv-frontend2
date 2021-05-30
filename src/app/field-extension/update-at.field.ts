import {SelectDateTimeField} from 'mht-test-libraries';

export class UpdateAtField extends SelectDateTimeField {
  constructor(option: Partial<SelectDateTimeField> = {}) {
    const init = {
      key: 'updatedAt',
      label: 'Ngay cap nhat'
    };
    super({...init, ...option});
  }
}
