import {Component, QueryList, ViewChildren} from '@angular/core';
import {UserEntity} from '../../_models/user.entity';
import {FormHelper} from '../../../base/_helpers/form-helper';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {USER} from '../../_constants/user.const';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {NzFormControlComponent} from 'ng-zorro-antd/form';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent extends FormHelper<UserEntity> {
  fields = [USER.name, USER.username, USER.password, USER.confirmPassword];

  constructor(private activated: ActivatedRoute, private userService: UserService) {
    super(activated, userService);
  }
}
