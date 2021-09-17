import {SelectObjectField} from 'mht-test-libraries';
import {Validators} from '@angular/forms';
import {ENDPOINT_INTEREST_PAYMENT, LABEL_INTEREST_PAYMENT} from '../_constants/interest-payment.const';

export class SelectInterestPaymentField extends SelectObjectField {
  constructor(options: Partial<SelectInterestPaymentField> = {}) {
    const init = {
      key: 'interest_payment',
      label: LABEL_INTEREST_PAYMENT,
      endpoint: ENDPOINT_INTEREST_PAYMENT
    };
    super(Object.assign(init, options));
  }
}



