import {Component} from '@angular/core';
import {CustomerEntity} from '../../_models/customer.entity';
import {FormHelper} from '../../../base/_helpers/form-helper';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../_services/customer.service';
import {LABEL_CUSTOMER, CUSTOMER} from '../../_constants/customer.const';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.css']
})
export class FormCustomerComponent extends FormHelper<CustomerEntity> {
  fields = [CUSTOMER.name, CUSTOMER.phone, CUSTOMER.phone2, CUSTOMER.dateOfBirth, CUSTOMER.identity, CUSTOMER.dateRegister, CUSTOMER.provinceRegister, CUSTOMER.currentAddress, CUSTOMER.addressRegister];
  label = LABEL_CUSTOMER;

  constructor(private activated: ActivatedRoute, private customerService: CustomerService) {
    super(activated, customerService);
  }
}
