import {Component} from '@angular/core';
import {ShowTableHelper} from '../../../base/_helpers/show-table-helper';
import {DirectorEntity} from '../../_models/director.entity';
import {DirectorService} from '../../_services/director.service';
import {COLUMNS_DIRECTOR, LABEL_DIRECTOR} from '../../_constants/director.const';
import {fieldToColumns} from '../../../../../node_modules/mht-test-libraries';

@Component({
  selector: 'app-list-director',
  templateUrl: './list-director.component.html',
  styleUrls: ['./list-director.component.css']
})
export class ListDirectorComponent extends ShowTableHelper<DirectorEntity> {
  columns = fieldToColumns(COLUMNS_DIRECTOR);
  title = LABEL_DIRECTOR;

  constructor(private directorService: DirectorService) {
    super(directorService);
  }

}
