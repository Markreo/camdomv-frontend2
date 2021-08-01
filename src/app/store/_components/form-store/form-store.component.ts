import {Component} from '@angular/core';
import {StoreEntity} from '../../_models/store.entity';
import {FormHelper} from '../../../base/_helpers/form-helper';
import {ActivatedRoute} from '@angular/router';
import {StoreService} from '../../_services/store.service';
import {LABEL_STORE, STORE} from '../../_constants/store.const';

@Component({
  selector: 'app-form-store',
  templateUrl: './form-store.component.html',
  styleUrls: ['./form-store.component.css']
})
export class FormStoreComponent extends FormHelper<StoreEntity> {
  fields = [STORE.name, STORE.address, STORE.phone, STORE.director];
  label = LABEL_STORE;

  constructor(private activated: ActivatedRoute, private storeService: StoreService) {
    super(activated, storeService);
  }
}
