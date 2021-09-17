import {BaseEntity} from '../../base/_models/base.entity';
import {CustomerEntity} from "../../customer/_models/customer.entity";
import {AssetTypeEntity} from "../../asset-type/_models/asset-type.entity";
import {UserEntity} from "../../user/_models/user.entity";
import {StoreEntity} from "../../store/_models/store.entity";
import {AssetEntity} from "../../asset/_models/asset.entity";
import {InterestPaymentEntity} from "../../interest-payment/_models/interest-payment.entity";
import {LoanEntity} from "../../loan/_models/loan.entity";

export class ContractEntity extends BaseEntity {
  code: string;
  customer: CustomerEntity;
  assetType: AssetTypeEntity;
  fromDate: Date;
  note: string;
  staff: UserEntity;
  store: StoreEntity;
  asset: AssetEntity;
  interestPayments: InterestPaymentEntity[];
  loans: LoanEntity[];

  totalMoney: number
  loanTime: number

  constructor(entity: Partial<ContractEntity> = {}) {
    super(entity);
  }
}
