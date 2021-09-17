import {Injectable} from '@angular/core';
import {BaseService} from '../../base/_services/base.service';
import {InterestPaymentEntity} from '../_models/interest-payment.entity';
import {ENDPOINT_INTEREST_PAYMENT, INTEREST_PAYMENT} from '../_constants/interest-payment.const';

@Injectable({
  providedIn: 'root'
})
export class InterestPaymentService extends BaseService<InterestPaymentEntity> {
  endpoint = ENDPOINT_INTEREST_PAYMENT;
  module = INTEREST_PAYMENT;

  createInstance(entity: Partial<InterestPaymentEntity>): InterestPaymentEntity {
    return new InterestPaymentEntity(entity);
  }

  constructor() {
    super();
  }
}
