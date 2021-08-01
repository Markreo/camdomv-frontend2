import {SelectObjectField} from 'mht-test-libraries';
import {Validators} from '@angular/forms';
import {ENDPOINT_CUSTOMER, LABEL_CUSTOMER} from '../_constants/customer.const';

export class SelectCustomerField extends SelectObjectField {
  constructor(options: Partial<SelectCustomerField> = {}) {
    const init = {
      key: 'customer',
      label: LABEL_CUSTOMER,
      endpoint: ENDPOINT_CUSTOMER
    };
    super(Object.assign(init, options));
  }
}



