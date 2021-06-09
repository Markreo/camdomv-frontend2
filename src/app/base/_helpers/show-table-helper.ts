import {BaseService} from '../_services/base.service';
import {Component, OnInit} from '@angular/core';
import {SCondition} from '@nestjsx/crud-request';
import {BaseEntity} from '../_models/base.entity';
import {TableColumn} from 'mht-test-libraries';
import {ProcessFilter} from '../../process-filter';
import {NzMessageService} from 'ng-zorro-antd/message';
import {AppInjector} from '../../app-injector';

@Component({
  template: ``
})
// tslint:disable-next-line:component-class-suffix
export class ShowTableHelper<T extends BaseEntity = BaseEntity> implements OnInit {
  data = [];
  getData = new ProcessFilter();
  title: string;
  columns: TableColumn[] = [];
  searchStr = '';

  protected service: BaseService<T>;
  protected nzMessageService: NzMessageService = AppInjector.get(NzMessageService);

  protected constructor(baseService: BaseService<T>) {
    this.service = baseService;
  }

  handleDelete(data: any): void {
    this.getData.loading = true;
    this.service.delete(data.id).subscribe(resp => {
      this.updateData();
      this.getData.loading = false;
      this.nzMessageService.success(`Xóa ${this.title} thành công!`);
    }, error => {
      this.nzMessageService.error(`Xóa ${this.title} thất bại! Xin vui lòng liên hệ quản trị viên!`);
      this.getData.loading = false;
    });
  }

  handleExport(): void {

  }

  ngOnInit(): void {
    this.setupQueryParams();

    this.subscribeData();
    this.updateData();
  }

  setupQueryParams(): void {
    this.getData.buildSearch = this.buildSearch;
    this.getData.filterObject.fields = this.columns.map(column => column.key);
  }

  buildSearch(str): SCondition {
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

  triggerSearch(): void {
    this.getData.filterObject.search = this.buildSearch(this.searchStr);
    this.updateData();
  }

}
