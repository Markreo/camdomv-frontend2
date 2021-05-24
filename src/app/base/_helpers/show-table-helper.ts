import {BaseService} from '../_services/base.service';
import {OnInit} from '@angular/core';
import {SCondition} from '@nestjsx/crud-request';

export abstract class ShowTableHelper<T> implements OnInit {
  data = [];
  getData: any = {filterObject: {}};
  title: string;
  abstract columns: any[];

  protected service: BaseService<T>;

  protected constructor(baseService: BaseService<T>) {
    this.service = baseService;
  }

  triggerSearch(s: any): void {
  }

  handleDelete(data: any): void {
    this.getData.loading = true;
    // this.service.delete(entity.id).subscribe(resp => {
    //   this.updateData();
    //   this.getData.loading = false;
    //   this.nzMessageService.success('Xóa record thành công!');
    // }, error => {
    //   this.nzMessageService.error('Xóa record thất bại!');
    //   this.getData.loading = false;
    // });
  }

  handleExport(): void {

  }

  ngOnInit(): void {
    this.getData.buildSearch = this.buildSearch;
    this.subscribeData();
    this.updateData();
  }

  buildSearch = (str): SCondition => {
    return {
      $or: [
        {
          name: {
            $contL: str
          }
        }
      ]
    };
  }

  subscribeData(): void {
    this.getData.subscribeData(filter => {
      return this.service.getWithFilter(filter);
    }).subscribe(({data}) => {
      this.data = data;
    });
  }

  updateData(): void {
    this.getData.updateData();
  }

}
