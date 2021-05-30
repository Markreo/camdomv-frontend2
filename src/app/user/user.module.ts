import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListUserComponent} from './_components/list-user/list-user.component';
import {DetailUserComponent} from './_components/detail-user/detail-user.component';
import {FormUserComponent} from './_components/form-user/form-user.component';
import {UserRoutingModule} from './user.routing';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {AntProviderModule} from '../ant-provider.module';
import {IconsProviderModule} from '../icons-provider.module';

@NgModule({
  declarations: [ListUserComponent, DetailUserComponent, FormUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    IconsProviderModule,
    AntProviderModule,
  ]
})
export class UserModule {
}
