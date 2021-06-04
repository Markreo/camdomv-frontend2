import {InputNameField} from '../../preset-field/input-name.field';
import {InputTextField} from 'mht-test-libraries';
import {Validators} from '@angular/forms';
import {InputPhoneNumberField} from '../../preset-field/input-phone-number.field';
import {CreatedAtField} from '../../field-extension/created-at.field';

export const STORE = {
  name: new InputNameField(),
  address: new InputTextField({key: 'address', label: 'Địa chỉ', validators: [Validators.required]}),
  phone: new InputPhoneNumberField({validators: [Validators.required]}),
  createdAt: new CreatedAtField()
};
export const ENDPOINT_STORE = '/store';
export const LABEL_STORE = 'Cửa hàng';
export const COLUMNS_STORE = [STORE.name, STORE.address, STORE.phone, STORE.createdAt];
