import {FormGroup} from '@angular/forms';
import {AppInjector} from '../../app-injector';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {BaseService} from '../_services/base.service';

export abstract class FormHelper<T> { // for 1 fields
  abstract fields = [];
  form: FormGroup = new FormGroup({});
  submitting = false;


  handleSubmit() {

  }

  constructor(activatedRoute: ActivatedRoute, baseService: BaseService<T>) {
  }
}
