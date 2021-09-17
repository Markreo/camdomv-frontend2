import {Component} from '@angular/core';
import {AssetTypeEntity} from '../../_models/asset-type.entity';
import {FormHelper} from '../../../base/_helpers/form-helper';
import {ActivatedRoute} from '@angular/router';
import {AssetTypeService} from '../../_services/asset-type.service';
import {LABEL_ASSET_TYPE, ASSET_TYPE} from '../../_constants/asset-type.const';

@Component({
  selector: 'app-form-asset-type',
  templateUrl: './form-asset-type.component.html',
  styleUrls: ['./form-asset-type.component.css']
})
export class FormAssetTypeComponent extends FormHelper<AssetTypeEntity> {
  fields = [ASSET_TYPE.name, ASSET_TYPE.note];
  label = LABEL_ASSET_TYPE;

  constructor(private activated: ActivatedRoute, private assetTypeService: AssetTypeService) {
    super(activated, assetTypeService);
  }
}
