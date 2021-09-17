import {Injectable} from '@angular/core';
import {BaseService} from '../../base/_services/base.service';
import {ContractEntity} from '../_models/contract.entity';
import {ENDPOINT_CONTRACT, CONTRACT} from '../_constants/contract.const';

@Injectable({
  providedIn: 'root'
})
export class ContractService extends BaseService<ContractEntity> {
  endpoint = ENDPOINT_CONTRACT;
  module = CONTRACT;

  createInstance(entity: Partial<ContractEntity>): ContractEntity {
    return new ContractEntity(entity);
  }

  constructor() {
    super();
  }
}
