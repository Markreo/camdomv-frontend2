import {BaseEntity} from '../../base/_models/base.entity';

export class LoanEntity extends BaseEntity {
  constructor(entity: Partial<LoanEntity> = {}) {
    super(entity);
  }
}
