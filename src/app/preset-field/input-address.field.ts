import {InputTextareaField} from 'mht-test-libraries';

export class InputAddressField extends InputTextareaField {
  constructor(options: Partial<InputAddressField> = {}) {
    const init = {
      key: 'address',
      label: 'Địa chỉ'
    };
    super({...init, ...options});
  }
}
