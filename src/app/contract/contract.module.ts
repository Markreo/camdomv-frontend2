import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListContractComponent} from './_components/list-contract/list-contract.component';
import {DetailContractComponent} from './_components/detail-contract/detail-contract.component';
import {FormContractComponent} from './_components/form-contract/form-contract.component';
import {ContractRoutingModule} from './contract.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AntProviderModule} from '../ant-provider.module';
import {FieldModule} from 'mht-test-libraries';
import {SharedModule} from '../shared/shared.module';
import {IconsProviderModule} from '../icons-provider.module';
@NgModule({
  declarations: [ListContractComponent, DetailContractComponent, FormContractComponent],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    IconsProviderModule,
    AntProviderModule,
    FormsModule,
    FieldModule
  ]
})
export class ContractModule {
}
