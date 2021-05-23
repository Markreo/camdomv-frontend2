import {Injectable} from '@angular/core';
import {BaseService} from '../../base/_services/base.service';
import {UserEntity} from '../_models/user.entity';
import {ENDPOINT_USER} from '../_constants/user.const';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<UserEntity> {
  endpoint = ENDPOINT_USER;

  createInstance(entity: Partial<UserEntity>): UserEntity {
    return new UserEntity(entity);
  }

  constructor() {
    super();
  }
}
