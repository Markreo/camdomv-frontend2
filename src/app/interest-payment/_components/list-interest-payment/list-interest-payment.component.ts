import {Component} from '@angular/core';
import {ShowTableHelper} from '../../../base/_helpers/show-table-helper';
import {InterestPaymentEntity} from '../../_models/interest-payment.entity';
import {InterestPaymentService} from '../../_services/interest-payment.service';
import {COLUMNS_INTEREST_PAYMENT, LABEL_INTEREST_PAYMENT} from '../../_constants/interest-payment.const';
import {fieldToColumns} from 'mht-test-libraries';

@Component({
  selector: 'app-list-interest-payment',
  templateUrl: './list-interest-payment.component.html',
  styleUrls: ['./list-interest-payment.component.css']
})
export class ListInterestPaymentComponent extends ShowTableHelper<InterestPaymentEntity> {
  columns = fieldToColumns(COLUMNS_INTEREST_PAYMENT);
  title = LABEL_INTEREST_PAYMENT;

  constructor(private interestPaymentService: InterestPaymentService) {
    super(interestPaymentService);
  }

}
