import {InputNameField} from '../../preset-field/input-name.field';
import {InputPasswordField, InputTextField} from 'mht-test-libraries';
import {CreatedAtField} from '../../field-extension/created-at.field';
import {FormControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

export const USER = {
  name: new InputNameField(),
  username: new InputTextField({key: 'username', label: 'Tài khoản', validators: [Validators.required]}),
  password: new InputPasswordField({
    key: 'password',
    label: 'Mật khẩu',
    validators: [Validators.required, compareWithConfirmPass('confirmPassword')]
  }),
  confirmPassword: new InputPasswordField({
    key: 'confirmPassword',
    label: 'Nhập lại mật khẩu',
    validators: [Validators.required, compareWithConfirmPass('password')]
  }),
  createAt: new CreatedAtField()
};
export const ENDPOINT_USER = '/user';
export const LABEL_USER = 'Người dùng';
export const COLUMNS_USER = [USER.name, USER.username, USER.createAt];


export function compareWithConfirmPass(key): ValidatorFn {
  return (password: FormControl): ValidationErrors => {
    const value = password.value;
    if (value) {
      const otherPass = password.parent.get(key);
      if (otherPass && otherPass.value) {
        if (value !== otherPass.value) {
          return {not_match: key === 'confirmPassword' ? 'mật khẩu xác nhận' : 'mật khẩu'};
        }
      }
    }
    return null;
  };
}
