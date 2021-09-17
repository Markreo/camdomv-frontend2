import {Component} from '@angular/core';
import {AssetEntity} from '../../_models/asset.entity';
import {FormHelper} from '../../../base/_helpers/form-helper';
import {ActivatedRoute} from '@angular/router';
import {AssetService} from '../../_services/asset.service';
import {LABEL_ASSET, ASSET} from '../../_constants/asset.const';

@Component({
  selector: 'app-form-asset',
  templateUrl: './form-asset.component.html',
  styleUrls: ['./form-asset.component.css']
})
export class FormAssetComponent extends FormHelper<AssetEntity> {
  fields = [];
  label = LABEL_ASSET
  constructor(private activated: ActivatedRoute, private assetService: AssetService) {
    super(activated, assetService);
  }
}
