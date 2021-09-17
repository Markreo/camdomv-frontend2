import {Component} from '@angular/core';
import {ShowTableHelper} from '../../../base/_helpers/show-table-helper';
import {AssetEntity} from '../../_models/asset.entity';
import {AssetService} from '../../_services/asset.service';
import {COLUMNS_ASSET, LABEL_ASSET} from '../../_constants/asset.const';
import {fieldToColumns} from 'mht-test-libraries';

@Component({
  selector: 'app-list-asset',
  templateUrl: './list-asset.component.html',
  styleUrls: ['./list-asset.component.css']
})
export class ListAssetComponent extends ShowTableHelper<AssetEntity> {
  columns = fieldToColumns(COLUMNS_ASSET);
  title = LABEL_ASSET;

  constructor(private assetService: AssetService) {
    super(assetService);
  }

}
