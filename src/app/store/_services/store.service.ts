import {Injectable} from '@angular/core';
import {BaseService} from '../../base/_services/base.service';
import {StoreEntity} from '../_models/store.entity';
import {ENDPOINT_STORE, STORE} from '../_constants/store.const';

@Injectable({
  providedIn: 'root'
})
export class StoreService extends BaseService<StoreEntity> {
  endpoint = ENDPOINT_STORE;
  module = STORE;

  createInstance(entity: Partial<StoreEntity>): StoreEntity {
    return new StoreEntity(entity);
  }

  constructor() {
    super();
  }
}
