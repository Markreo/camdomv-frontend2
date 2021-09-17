import {Component} from '@angular/core';
import {LoanEntity} from '../../_models/loan.entity';
import {FormHelper} from '../../../base/_helpers/form-helper';
import {ActivatedRoute} from '@angular/router';
import {LoanService} from '../../_services/loan.service';
import {LABEL_LOAN, LOAN} from '../../_constants/loan.const';

@Component({
  selector: 'app-form-loan',
  templateUrl: './form-loan.component.html',
  styleUrls: ['./form-loan.component.css']
})
export class FormLoanComponent extends FormHelper<LoanEntity> {
  fields = [];
  label = LABEL_LOAN
  constructor(private activated: ActivatedRoute, private loanService: LoanService) {
    super(activated, loanService);
  }
}
