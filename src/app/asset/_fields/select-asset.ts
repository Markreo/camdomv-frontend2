import {SelectObjectField} from 'mht-test-libraries';
import {Validators} from '@angular/forms';
import {ENDPOINT_ASSET, LABEL_ASSET} from '../_constants/asset.const';

export class SelectAssetField extends SelectObjectField {
  constructor(options: Partial<SelectAssetField> = {}) {
    const init = {
      key: 'asset',
      label: LABEL_ASSET,
      endpoint: ENDPOINT_ASSET
    };
    super(Object.assign(init, options));
  }
}



