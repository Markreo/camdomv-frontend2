import {SelectDateTimeField} from 'mht-test-libraries';

export class DeleteAtField extends SelectDateTimeField {
  constructor(option: Partial<SelectDateTimeField> = {}) {
    const init = {
      key: 'deleteddAt',
      label: 'Ngay Xoa'
    };
    super({...init, ...option});
  }
}
