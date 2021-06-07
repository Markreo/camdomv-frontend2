import {SelectObject} from '../../field/components/select-object';
import {Validators} from '@angular/forms';
import {ENDPOINT_DIRECTOR, LABEL_DIRECTOR} from '../_constants/director.const';

export class SelectDirector extends SelectObject {
  constructor(options: Partial<SelectDirector> = {}) {
    const init = {
      key: 'director',
      label: LABEL_DIRECTOR,
      validators: [Validators.required],
      endpoint: ENDPOINT_DIRECTOR
    };
    super(Object.assign(init, options));
  }
}



