import {InputTextField} from 'mht-test-libraries';
import {Validators} from '@angular/forms';

export class InputNameField extends InputTextField {
  constructor(options: Partial<InputNameField> = {}) {
    const init = {
      key: 'name',
      label: 'Tên',
      validators: [Validators.required]
    };
    super({...init, ...options});
  }
}
