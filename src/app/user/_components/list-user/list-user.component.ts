import {Component} from '@angular/core';
import {ShowTableHelper} from '../../../base/_helpers/show-table-helper';
import {UserEntity} from '../../_models/user.entity';
import {UserService} from '../../_services/user.service';
import {COLUMNS_USER, LABEL_USER} from '../../_constants/user.const';
import {fieldToColumns} from 'mht-test-libraries';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent extends ShowTableHelper<UserEntity> {
  columns = fieldToColumns(COLUMNS_USER);
  title = LABEL_USER;

  constructor(private userService: UserService) {
    super(userService);
  }

}
