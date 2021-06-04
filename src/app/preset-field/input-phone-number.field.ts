import {InputTextField} from 'mht-test-libraries';

export class InputPhoneNumberField extends InputTextField {
  constructor(options: Partial<InputPhoneNumberField> = {}) {
    const init = {
      key: 'phone',
      label: 'Số điện thoại'
    };
    super({...init, ...options});
  }
}
