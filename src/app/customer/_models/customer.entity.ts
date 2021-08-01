import {BaseEntity} from '../../base/_models/base.entity';

export class CustomerEntity extends BaseEntity {
  name;
  phone;
  phone2;
  dateOfBirth;
  identity;
  dateRegister;
  provinceRegister;
  currentAddress;
  addressRegister;

  constructor(entity: Partial<CustomerEntity> = {}) {
    super(entity);
    this.name = entity.name;
    this.phone = entity.phone;
    this.phone2 = entity.phone2;
    this.dateOfBirth = entity.dateOfBirth;
    this.dateRegister = entity.dateRegister;
    this.identity = entity.identity;
    this.provinceRegister = entity.provinceRegister;
    this.currentAddress = entity.currentAddress;
    this.addressRegister = entity.addressRegister;
  }
}
