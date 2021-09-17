import {Component} from '@angular/core';
import {ContractEntity} from '../../_models/contract.entity';
import {FormHelper} from '../../../base/_helpers/form-helper';
import {ActivatedRoute} from '@angular/router';
import {ContractService} from '../../_services/contract.service';
import {LABEL_CONTRACT, CONTRACT} from '../../_constants/contract.const';

@Component({
  selector: 'app-form-contract',
  templateUrl: './form-contract.component.html',
  styleUrls: ['./form-contract.component.css']
})
export class FormContractComponent extends FormHelper<ContractEntity> {
  fields = [];
  label = LABEL_CONTRACT;
  current = 0
  constructor(private activated: ActivatedRoute, private contractService: ContractService) {
    super(activated, contractService);
  }


  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        break;
      }
      case 1: {
        break;
      }
      case 2: {
        break;
      }
      default: {
      }
    }
  }
}
