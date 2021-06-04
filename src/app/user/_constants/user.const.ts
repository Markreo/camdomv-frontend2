import {InputNameField} from '../../preset-field/input-name.field';
import {InputPasswordField, InputTextField} from 'mht-test-libraries';
import {CreatedAtField} from '../../field-extension/created-at.field';
import {Validators} from '@angular/forms';

export const USER = {
  name: new InputNameField(),
  username: new InputTextField({key: 'username', label: 'Tài khoản', validators: [Validators.required]}),
  password: new InputPasswordField({key: 'password', label: 'Mật khẩu', validators: [Validators.required]}),
  confirmPassword: new InputPasswordField({key: 'confirmPassword', label: 'Nhập lại mật khẩu', validators: [Validators.required]}),
  createAt: new CreatedAtField()
};
export const ENDPOINT_USER = '/user';
export const LABEL_USER = 'Người dùng';
export const COLUMNS_USER = [USER.name, USER.username, USER.createAt];
