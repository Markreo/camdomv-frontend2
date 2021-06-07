import {BaseEntity} from '../../base/_models/base.entity';

export class DirectorEntity extends BaseEntity {
  name: string;
  dateOfBirthDirector;
  identityCard;
  dateRegisterCard;
  provinceRegisterCard;
  phone;
  address;

  constructor(entity: Partial<DirectorEntity> = {}) {
    super(entity);
    this.name = entity.name;
    this.dateOfBirthDirector = entity.dateOfBirthDirector;
    this.identityCard = entity.identityCard;
    this.dateRegisterCard = entity.dateRegisterCard;
    this.provinceRegisterCard = entity.provinceRegisterCard;
    this.phone = entity.phone;
    this.address = entity.address;
  }
}
