import {InputNameField} from '../../preset-field/input-name.field';
import {InputTextField} from 'mht-test-libraries';
import {CreateAtField} from '../../field-extension/create-at.field';

export const USER = {
  name: new InputNameField(),
  username: new InputTextField({key: 'username', label: 'Tài khoản'}),
  password: new InputTextField({key: 'password', label: 'Mật khẩu'}),
  createAt: new CreateAtField()
};
export const ENDPOINT_USER = '/user';
export const LABEL_USER = 'Người dùng';
export const COLUMNS_USER = [USER.name, USER.username, USER.createAt];
