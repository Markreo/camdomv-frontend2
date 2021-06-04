import {BaseEntity} from '../../base/_models/base.entity';

export class StoreEntity extends BaseEntity {
  constructor(entity: Partial<StoreEntity> = {}) {
    super(entity);
  }
}
