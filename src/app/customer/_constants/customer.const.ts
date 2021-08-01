import {InputNameField} from "../../preset-field/input-name.field";
import {InputPhoneNumberField} from "../../preset-field/input-phone-number.field";
import {InputTextField, SelectDateField} from "mht-test-libraries";

export const CUSTOMER = {
  name: new InputNameField(),
  phone: new InputPhoneNumberField(),
  phone2: new InputPhoneNumberField({label: 'Số điện thoại 2', key: 'phone2'}),
  dateOfBirth: new SelectDateField({key: 'dateOfBirth', label: 'Ngày sinh'}),
  identity: new InputTextField({key: 'identity', label: 'CMND'}),
  dateRegister: new SelectDateField({key: 'dateRegister', label: 'Ngày cấp'}),
  provinceRegister: new InputTextField({key: 'provinceRegister', label: 'Nơi Cấp'}),
  currentAddress: new InputTextField({key: 'currentAddress', label: 'Địa chỉ hiện tại'}),
  addressRegister: new InputTextField({key: 'addressRegister', label: 'Nơi đăng ký HKTT'})
};
export const ENDPOINT_CUSTOMER = '/customer';
export const LABEL_CUSTOMER = 'Khách hàng';
export const COLUMNS_CUSTOMER = [CUSTOMER.name, CUSTOMER.phone, CUSTOMER.dateOfBirth, CUSTOMER.currentAddress];
