import {SelectObject} from '../../field/components/select-object';
import {Validators} from '@angular/forms';
import {ENDPOINT_USER, LABEL_USER} from '../_constants/user.const';

export class SelectUser extends SelectObject {
  constructor(options: Partial<SelectUser> = {}) {
    const init = {
      key: 'user',
      label: LABEL_USER,
      validators: [Validators.required],
      endpoint: ENDPOINT_USER
    };
    super(Object.assign(init, options));
  }
}



