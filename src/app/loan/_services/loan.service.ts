import {Injectable} from '@angular/core';
import {BaseService} from '../../base/_services/base.service';
import {LoanEntity} from '../_models/loan.entity';
import {ENDPOINT_LOAN, LOAN} from '../_constants/loan.const';

@Injectable({
  providedIn: 'root'
})
export class LoanService extends BaseService<LoanEntity> {
  endpoint = ENDPOINT_LOAN;
  module = LOAN;

  createInstance(entity: Partial<LoanEntity>): LoanEntity {
    return new LoanEntity(entity);
  }

  constructor() {
    super();
  }
}
