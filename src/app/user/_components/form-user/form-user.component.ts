import {Component} from '@angular/core';
import {UserEntity} from '../../_models/user.entity';
import {FormHelper} from '../../../base/_helpers/form-helper';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent extends FormHelper<UserEntity> {
  fields = [];

  constructor(private activated: ActivatedRoute, private userService: UserService) {
    super(activated, userService);
  }
}
