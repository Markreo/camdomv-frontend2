import {BaseEntity} from '../../base/_models/base.entity';
import {AssetTypeEntity} from "../../asset-type/_models/asset-type.entity";

export class AssetEntity extends BaseEntity {
  assetType: AssetTypeEntity;
  numberRegister
  districtRegister
  provinceRegister
  dateRegister
  brand
  model
  color
  capacity
  identityNumber
  engineNumber
  chassisNumber
  status

  constructor(entity: Partial<AssetEntity> = {}) {
    super(entity);
  }
}
