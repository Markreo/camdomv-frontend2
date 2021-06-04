import {Component} from '@angular/core';
import {ShowTableHelper} from '../../../base/_helpers/show-table-helper';
import {StoreEntity} from '../../_models/store.entity';
import {StoreService} from '../../_services/store.service';
import {COLUMNS_STORE, LABEL_STORE} from '../../_constants/store.const';
import {fieldToColumns} from 'mht-test-libraries';

@Component({
  selector: 'app-list-store',
  templateUrl: './list-store.component.html',
  styleUrls: ['./list-store.component.css']
})
export class ListStoreComponent extends ShowTableHelper<StoreEntity> {
  columns = fieldToColumns(COLUMNS_STORE);
  title = LABEL_STORE;

  constructor(private storeService: StoreService) {
    super(storeService);
  }

}
