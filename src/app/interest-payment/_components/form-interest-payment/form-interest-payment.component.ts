import {Component} from '@angular/core';
import {InterestPaymentEntity} from '../../_models/interest-payment.entity';
import {FormHelper} from '../../../base/_helpers/form-helper';
import {ActivatedRoute} from '@angular/router';
import {InterestPaymentService} from '../../_services/interest-payment.service';
import {LABEL_INTEREST_PAYMENT, INTEREST_PAYMENT} from '../../_constants/interest-payment.const';

@Component({
  selector: 'app-form-interest-payment',
  templateUrl: './form-interest-payment.component.html',
  styleUrls: ['./form-interest-payment.component.css']
})
export class FormInterestPaymentComponent extends FormHelper<InterestPaymentEntity> {
  fields = [];
  label = LABEL_INTEREST_PAYMENT
  constructor(private activated: ActivatedRoute, private interestPaymentService: InterestPaymentService) {
    super(activated, interestPaymentService);
  }
}
