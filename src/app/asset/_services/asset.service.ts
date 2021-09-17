import {Injectable} from '@angular/core';
import {BaseService} from '../../base/_services/base.service';
import {AssetEntity} from '../_models/asset.entity';
import {ENDPOINT_ASSET, ASSET} from '../_constants/asset.const';

@Injectable({
  providedIn: 'root'
})
export class AssetService extends BaseService<AssetEntity> {
  endpoint = ENDPOINT_ASSET;
  module = ASSET;

  createInstance(entity: Partial<AssetEntity>): AssetEntity {
    return new AssetEntity(entity);
  }

  constructor() {
    super();
  }
}
