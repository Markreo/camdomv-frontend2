import {Component} from '@angular/core';
import {DirectorEntity} from '../../_models/director.entity';
import {FormHelper} from '../../../base/_helpers/form-helper';
import {ActivatedRoute} from '@angular/router';
import {DirectorService} from '../../_services/director.service';
import {DIRECTOR} from '../../_constants/director.const';

@Component({
  selector: 'app-form-director',
  templateUrl: './form-director.component.html',
  styleUrls: ['./form-director.component.css']
})
export class FormDirectorComponent extends FormHelper<DirectorEntity> {
  fields = [DIRECTOR.name, DIRECTOR.phone, DIRECTOR.address, DIRECTOR.dateOfBirthDirector, DIRECTOR.identityCard, DIRECTOR.dateRegisterCard, DIRECTOR.provinceRegisterCard];

  constructor(private activated: ActivatedRoute, private directorService: DirectorService) {
    super(activated, directorService);
  }
}
