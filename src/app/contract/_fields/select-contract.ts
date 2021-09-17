import {SelectObjectField} from 'mht-test-libraries';
import {Validators} from '@angular/forms';
import {ENDPOINT_CONTRACT, LABEL_CONTRACT} from '../_constants/contract.const';

export class SelectContractField extends SelectObjectField {
  constructor(options: Partial<SelectContractField> = {}) {
    const init = {
      key: 'contract',
      label: LABEL_CONTRACT,
      endpoint: ENDPOINT_CONTRACT
    };
    super(Object.assign(init, options));
  }
}



