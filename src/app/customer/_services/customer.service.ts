import {Injectable} from '@angular/core';
import {BaseService} from '../../base/_services/base.service';
import {CustomerEntity} from '../_models/customer.entity';
import {ENDPOINT_CUSTOMER, CUSTOMER} from '../_constants/customer.const';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService<CustomerEntity> {
  endpoint = ENDPOINT_CUSTOMER;
  module = CUSTOMER;

  createInstance(entity: Partial<CustomerEntity>): CustomerEntity {
    return new CustomerEntity(entity);
  }

  constructor() {
    super();
  }
}
