import {Component} from '@angular/core';
import {ShowTableHelper} from '../../../base/_helpers/show-table-helper';
import {LoanEntity} from '../../_models/loan.entity';
import {LoanService} from '../../_services/loan.service';
import {COLUMNS_LOAN, LABEL_LOAN} from '../../_constants/loan.const';
import {fieldToColumns} from 'mht-test-libraries';

@Component({
  selector: 'app-list-loan',
  templateUrl: './list-loan.component.html',
  styleUrls: ['./list-loan.component.css']
})
export class ListLoanComponent extends ShowTableHelper<LoanEntity> {
  columns = fieldToColumns(COLUMNS_LOAN);
  title = LABEL_LOAN;

  constructor(private loanService: LoanService) {
    super(loanService);
  }

}
