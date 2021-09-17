import {InputNameField} from "../../preset-field/input-name.field";
import {InputTextareaField} from "mht-test-libraries";

export const ASSET_TYPE = {
  name: new InputNameField(),
  note: new InputTextareaField({key: 'note', label: 'Note'})
};
export const ENDPOINT_ASSET_TYPE = '/asset-type';
export const LABEL_ASSET_TYPE = 'Asset-type';
export const COLUMNS_ASSET_TYPE = [ASSET_TYPE.name];
