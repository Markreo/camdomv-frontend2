import {BaseService} from '../_services/base.service';

export abstract class ShowTableHelper<T> {
  data = [];
  getData = {filterObject: {}};
  title: string;
  abstract columns: any[];

  constructor(baseService: BaseService<T>) {
  }
}
