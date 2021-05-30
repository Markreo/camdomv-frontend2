import {BaseService} from '../_services/base.service';
import {Component, OnInit} from '@angular/core';
import {SCondition} from '@nestjsx/crud-request';
import {BaseEntity} from '../_models/base.entity';
import {TableColumn} from 'mht-test-libraries/field/models/table-column';
import {ProcessFilter} from '../../process-filter';

@Component({
  template: ``
})
// tslint:disable-next-line:component-class-suffix
export class ShowTableHelper<T extends BaseEntity = BaseEntity> implements OnInit {
  data = [];
  getData = new ProcessFilter();
  title: string;
  columns: TableColumn[] = [];

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

}
