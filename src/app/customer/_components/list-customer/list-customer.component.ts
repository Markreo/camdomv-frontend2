import {Component} from '@angular/core';
import {ShowTableHelper} from '../../../base/_helpers/show-table-helper';
import {CustomerEntity} from '../../_models/customer.entity';
import {CustomerService} from '../../_services/customer.service';
import {COLUMNS_CUSTOMER, LABEL_CUSTOMER} from '../../_constants/customer.const';
import {fieldToColumns} from 'mht-test-libraries';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent extends ShowTableHelper<CustomerEntity> {
  columns = fieldToColumns(COLUMNS_CUSTOMER);
  title = LABEL_CUSTOMER;

  constructor(private customerService: CustomerService) {
    super(customerService);
  }

}
