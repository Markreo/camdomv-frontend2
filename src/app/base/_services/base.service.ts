import {BaseEntity} from '../_models/base.entity';
import {Observable, of} from 'rxjs';

export abstract class BaseService<T extends BaseEntity> {

  abstract endpoint: string;

  abstract createInstance(entity: Partial<T>): T;

  get(id: string): Observable<T> {
    return of(this.createInstance({}));
  }
}
