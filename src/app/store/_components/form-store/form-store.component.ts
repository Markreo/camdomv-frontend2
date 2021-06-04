import {Component} from '@angular/core';
import {StoreEntity} from '../../_models/store.entity';
import {FormHelper} from '../../../base/_helpers/form-helper';
import {ActivatedRoute} from '@angular/router';
import {StoreService} from '../../_services/store.service';

@Component({
  selector: 'app-form-store',
  templateUrl: './form-store.component.html',
  styleUrls: ['./form-store.component.css']
})
export class FormStoreComponent extends FormHelper<StoreEntity> {
  fields = [];

  constructor(private activated: ActivatedRoute, private storeService: StoreService) {
    super(activated, storeService);
  }
}
