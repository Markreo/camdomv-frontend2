import {SelectDateTimeField} from 'mht-test-libraries/field/models/fields/select-date-time.field';

export enum MODULE {
  CUSTOMER
}

export const COMMON = {
  // createdAt: new SelectDateTimeField({key: 'createdAt', label: 'Ngày tạo'}),
  // updatedAt: new SelectDateTimeField({key: 'updatedAt', label: 'Ngày cập nhật'}),
  // deleteAt: new SelectDateTimeField({key: 'deleteAt', label: 'Ngày xoá'})
};


export const FORM_TOOLTIP = {
  default: {
    required: 'thieu'
  }
};
