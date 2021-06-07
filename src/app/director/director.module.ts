import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListDirectorComponent} from './_components/list-director/list-director.component';
import {DetailDirectorComponent} from './_components/detail-director/detail-director.component';
import {FormDirectorComponent} from './_components/form-director/form-director.component';
import {DirectorRoutingModule} from './director.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AntProviderModule} from '../ant-provider.module';
import {FieldModule} from '../../../node_modules/mht-test-libraries';
import {SharedModule} from '../shared/shared.module';
import {IconsProviderModule} from '../icons-provider.module';
@NgModule({
  declarations: [ListDirectorComponent, DetailDirectorComponent, FormDirectorComponent],
  imports: [
    CommonModule,
    DirectorRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    IconsProviderModule,
    AntProviderModule,
    FormsModule,
    FieldModule
  ]
})
export class DirectorModule {
}
