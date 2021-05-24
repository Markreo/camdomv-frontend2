import {BaseService} from '../_services/base.service';

export abstract class ShowTableHelper<T> {
  data = [];
  getData: any = {filterObject: {}};
  title: string;
  abstract columns: any[];

  protected baseService: BaseService<T>;

  // tslint:disable-next-line:variable-name
  protected constructor(_baseService: BaseService<T>) {
    this.baseService = _baseService;
  }

  triggerSearch(s: any): void {
  }

  handleDelete(data: any): void {

  }

  handleExport(): void {

  }
}
