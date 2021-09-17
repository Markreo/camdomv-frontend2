import {SelectObjectField} from 'mht-test-libraries';
import {Validators} from '@angular/forms';
import {ENDPOINT_ASSET_TYPE, LABEL_ASSET_TYPE} from '../_constants/asset-type.const';

export class SelectAssetTypeField extends SelectObjectField {
  constructor(options: Partial<SelectAssetTypeField> = {}) {
    const init = {
      key: 'asset_type',
      label: LABEL_ASSET_TYPE,
      endpoint: ENDPOINT_ASSET_TYPE
    };
    super(Object.assign(init, options));
  }
}



