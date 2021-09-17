import {Injectable} from '@angular/core';
import {BaseService} from '../../base/_services/base.service';
import {AssetTypeEntity} from '../_models/asset-type.entity';
import {ENDPOINT_ASSET_TYPE, ASSET_TYPE} from '../_constants/asset-type.const';

@Injectable({
  providedIn: 'root'
})
export class AssetTypeService extends BaseService<AssetTypeEntity> {
  endpoint = ENDPOINT_ASSET_TYPE;
  module = ASSET_TYPE;

  createInstance(entity: Partial<AssetTypeEntity>): AssetTypeEntity {
    return new AssetTypeEntity(entity);
  }

  constructor() {
    super();
  }
}
