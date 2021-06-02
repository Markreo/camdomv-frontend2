import {Component, QueryList, ViewChildren} from '@angular/core';
import {UserEntity} from '../../_models/user.entity';
import {FormHelper} from '../../../base/_helpers/form-helper';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {USER} from '../../_constants/user.const';
import {FormBuilder, Validators} from '@angular/forms';
import {NzFormControlComponent} from 'ng-zorro-antd/form';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent extends FormHelper<UserEntity> {
  fields = [USER.name, USER.username, USER.password, USER.confirmPassword];
  validateForm = this.fb.group({
    userName: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    comment: ['', [Validators.required]]
  });

  @ViewChildren(NzFormControlComponent) formControls: QueryList<NzFormControlComponent>;

  constructor(private activated: ActivatedRoute, private userService: UserService, private fb: FormBuilder) {
    super(activated, userService);
  }

  log(): void {
    this.formControls.forEach(formCOntrol => {
      formCOntrol.ngAfterContentInit()
    });
  }
}
