import {BaseEntity} from '../_models/base.entity';
import {of} from 'rxjs';

export abstract class BaseService<T extends BaseEntity> {

  abstract endpoint: string;

  abstract createInstance(entity: Partial<BaseEntity>): BaseEntity;

  get(id: string) {
    return of(this.createInstance({}));
  }
}
