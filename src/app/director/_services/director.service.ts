import {Injectable} from '@angular/core';
import {BaseService} from '../../base/_services/base.service';
import {DirectorEntity} from '../_models/director.entity';
import {DIRECTOR, ENDPOINT_DIRECTOR} from '../_constants/director.const';

@Injectable({
  providedIn: 'root'
})
export class DirectorService extends BaseService<DirectorEntity> {
  endpoint = ENDPOINT_DIRECTOR;
  module = DIRECTOR;

  createInstance(entity: Partial<DirectorEntity>): DirectorEntity {
    return new DirectorEntity(entity);
  }

  constructor() {
    super();
  }
}
