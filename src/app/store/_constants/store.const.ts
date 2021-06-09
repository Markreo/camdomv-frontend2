import {InputNameField} from '../../preset-field/input-name.field';
import {InputTextField} from 'mht-test-libraries';
import {Validators} from '@angular/forms';
import {InputPhoneNumberField} from '../../preset-field/input-phone-number.field';
import {CreatedAtField} from '../../field-extension/created-at.field';
import {SelectDirector} from '../../director/_fields/select-director';

export const STORE = {
  name: new InputNameField(),
  address: new InputTextField({key: 'address', label: 'Địa chỉ', validators: [Validators.required]}),
  phone: new InputPhoneNumberField({validators: [Validators.required]}),
  director: new SelectDirector(),
  createdAt: new CreatedAtField()
};
export const ENDPOINT_STORE = '/store';
export const LABEL_STORE = 'Cửa hàng';
export const COLUMNS_STORE = [STORE.name, STORE.director, STORE.address, STORE.phone, STORE.createdAt];
