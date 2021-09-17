import {BaseEntity} from '../../base/_models/base.entity';

export class AssetTypeEntity extends BaseEntity {
  name: string;
  note: string;
  rateType: 'PERCENT' | 'FIX';
  rateUnit
  loanTime
  frequency
  rate

  constructor(entity: Partial<AssetTypeEntity> = {}) {
    super(entity);
    this.name = entity.name;
    this.note = entity.note;
  }
}
