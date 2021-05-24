import {InputNameField} from '../../preset-field/input-name.field';
import {InputTextField} from 'mht-test-libraries';

export const USER = {
  name: new InputNameField(),
  username: new InputTextField({key: 'username', label: 'Tài khoản'}),
  password: new InputTextField({key: 'password', label: 'Mật khẩu'})
};
export const ENDPOINT_USER = '/user';
export const LABEL_USER = 'Người dùng';
export const COLUMNS_USER = [USER.name, USER.username];
