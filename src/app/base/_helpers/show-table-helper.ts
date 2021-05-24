import {BaseService} from '../_services/base.service';

export abstract class ShowTableHelper<T> {
  data = [];
  getData: any = {filterObject: {}};
  title: string;
  abstract columns: any[];

  constructor(baseService: BaseService<T>) {
  }

  triggerSearch(s: any): void {
  }

  handleDelete(data: any): void {

  }

  handleExport(): void {

  }
}
