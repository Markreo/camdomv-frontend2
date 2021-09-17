import {Component} from '@angular/core';
import {ShowTableHelper} from '../../../base/_helpers/show-table-helper';
import {ContractEntity} from '../../_models/contract.entity';
import {ContractService} from '../../_services/contract.service';
import {COLUMNS_CONTRACT, LABEL_CONTRACT} from '../../_constants/contract.const';
import {fieldToColumns} from 'mht-test-libraries';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent extends ShowTableHelper<ContractEntity> {
  columns = fieldToColumns(COLUMNS_CONTRACT);
  title = LABEL_CONTRACT;

  constructor(private contractService: ContractService) {
    super(contractService);
  }

}
