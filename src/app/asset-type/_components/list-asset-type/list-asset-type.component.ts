import {Component} from '@angular/core';
import {ShowTableHelper} from '../../../base/_helpers/show-table-helper';
import {AssetTypeEntity} from '../../_models/asset-type.entity';
import {AssetTypeService} from '../../_services/asset-type.service';
import {COLUMNS_ASSET_TYPE, LABEL_ASSET_TYPE} from '../../_constants/asset-type.const';
import {fieldToColumns} from 'mht-test-libraries';

@Component({
  selector: 'app-list-asset-type',
  templateUrl: './list-asset-type.component.html',
  styleUrls: ['./list-asset-type.component.css']
})
export class ListAssetTypeComponent extends ShowTableHelper<AssetTypeEntity> {
  columns = fieldToColumns(COLUMNS_ASSET_TYPE);
  title = LABEL_ASSET_TYPE;

  constructor(private assetTypeService: AssetTypeService) {
    super(assetTypeService);
  }

}
