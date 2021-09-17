import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListLoanComponent} from './_components/list-loan/list-loan.component';
import {DetailLoanComponent} from './_components/detail-loan/detail-loan.component';
import {FormLoanComponent} from './_components/form-loan/form-loan.component';
import {LoanRoutingModule} from './loan.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AntProviderModule} from '../ant-provider.module';
import {FieldModule} from 'mht-test-libraries';
import {SharedModule} from '../shared/shared.module';
import {IconsProviderModule} from '../icons-provider.module';
@NgModule({
  declarations: [ListLoanComponent, DetailLoanComponent, FormLoanComponent],
  imports: [
    CommonModule,
    LoanRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    IconsProviderModule,
    AntProviderModule,
    FormsModule,
    FieldModule
  ]
})
export class LoanModule {
}
