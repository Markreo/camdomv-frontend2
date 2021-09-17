import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListInterestPaymentComponent} from './_components/list-interest-payment/list-interest-payment.component';
import {DetailInterestPaymentComponent} from './_components/detail-interest-payment/detail-interest-payment.component';
import {FormInterestPaymentComponent} from './_components/form-interest-payment/form-interest-payment.component';
import {InterestPaymentRoutingModule} from './interest-payment.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AntProviderModule} from '../ant-provider.module';
import {FieldModule} from 'mht-test-libraries';
import {SharedModule} from '../shared/shared.module';
import {IconsProviderModule} from '../icons-provider.module';
@NgModule({
  declarations: [ListInterestPaymentComponent, DetailInterestPaymentComponent, FormInterestPaymentComponent],
  imports: [
    CommonModule,
    InterestPaymentRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    IconsProviderModule,
    AntProviderModule,
    FormsModule,
    FieldModule
  ]
})
export class InterestPaymentModule {
}
