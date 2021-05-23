import {BaseEntity} from '../../base/_models/base.entity';

export class UserEntity extends BaseEntity {
  constructor(entity: Partial<UserEntity> = {}) {
    super(entity);
  }
}
