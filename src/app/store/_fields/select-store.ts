import {SelectObject} from '../../field/components/select-object';
import {Validators} from '@angular/forms';
import {ENDPOINT_STORE, LABEL_STORE} from '../_constants/store.const';

export class SelectStore extends SelectObject {
  constructor(options: Partial<SelectStore> = {}) {
    const init = {
      key: 'store',
      label: LABEL_STORE,
      validators: [Validators.required],
      endpoint: ENDPOINT_STORE
    };
    super(Object.assign(init, options));
  }
}



