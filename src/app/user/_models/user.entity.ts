import {BaseEntity} from '../../base/_models/base.entity';

export class UserEntity extends BaseEntity {
  name: string;
  username: string;
  password: string;
  store: any[];

  constructor(entity: Partial<UserEntity> = {}) {
    super(entity);
    this.name = entity.name;
    this.username = entity.username;
    this.password = entity.password;
    this.store = entity.store || [];
  }
}
