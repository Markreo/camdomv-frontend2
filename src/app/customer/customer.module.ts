import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListCustomerComponent} from './_components/list-customer/list-customer.component';
import {DetailCustomerComponent} from './_components/detail-customer/detail-customer.component';
import {FormCustomerComponent} from './_components/form-customer/form-customer.component';
import {CustomerRoutingModule} from './customer.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AntProviderModule} from '../ant-provider.module';
import {FieldModule} from 'mht-test-libraries';
import {SharedModule} from '../shared/shared.module';
import {IconsProviderModule} from '../icons-provider.module';
@NgModule({
  declarations: [ListCustomerComponent, DetailCustomerComponent, FormCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    IconsProviderModule,
    AntProviderModule,
    FormsModule,
    FieldModule
  ]
})
export class CustomerModule {
}
