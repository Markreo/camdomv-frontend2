import {SelectObjectField} from 'mht-test-libraries';
import {Validators} from '@angular/forms';
import {ENDPOINT_LOAN, LABEL_LOAN} from '../_constants/loan.const';

export class SelectLoanField extends SelectObjectField {
  constructor(options: Partial<SelectLoanField> = {}) {
    const init = {
      key: 'loan',
      label: LABEL_LOAN,
      endpoint: ENDPOINT_LOAN
    };
    super(Object.assign(init, options));
  }
}



