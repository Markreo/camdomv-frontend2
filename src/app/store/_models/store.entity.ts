import {BaseEntity} from '../../base/_models/base.entity';
import {DirectorEntity} from '../../director/_models/director.entity';

export class StoreEntity extends BaseEntity {
  name;
  address;
  phone: string;
  director: DirectorEntity;

  constructor(entity: Partial<StoreEntity> = {}) {
    super(entity);
    this.name = entity.name;
    this.address = entity.address;
    this.phone = entity.phone;
    this.director = entity.director;
  }
}
