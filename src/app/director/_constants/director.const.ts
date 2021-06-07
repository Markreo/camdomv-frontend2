import {InputNameField} from '../../preset-field/input-name.field';
import {InputTextField, SelectDateField} from 'mht-test-libraries';
import {InputPhoneNumberField} from '../../preset-field/input-phone-number.field';
import {InputAddressField} from '../../preset-field/input-address.field';
import {Validators} from '@angular/forms';
import {CreatedAtField} from '../../field-extension/created-at.field';

export const DIRECTOR = {
  name: new InputNameField(),
  dateOfBirthDirector: new SelectDateField({key: 'dateOfBirthDirector', label: 'Ngày sinh'}),
  identityCard: new InputTextField({key: 'identityCard', label: 'Số CMND'}),
  dateRegisterCard: new SelectDateField({key: 'dateRegisterCard', label: 'Ngày cấp'}),
  provinceRegisterCard: new InputTextField({key: 'provinceRegisterCard', label: 'Nơi cấp'}),
  phone: new InputPhoneNumberField({validators: [Validators.required]}),
  address: new InputAddressField({validators: [Validators.required]}),
  createdAt: new CreatedAtField()
};
export const ENDPOINT_DIRECTOR = '/director';
export const LABEL_DIRECTOR = 'Giám đốc';
export const COLUMNS_DIRECTOR = [DIRECTOR.name, DIRECTOR.phone, DIRECTOR.address, DIRECTOR.createdAt];
