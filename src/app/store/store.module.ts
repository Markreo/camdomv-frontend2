import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListStoreComponent} from './_components/list-store/list-store.component';
import {DetailStoreComponent} from './_components/detail-store/detail-store.component';
import {FormStoreComponent} from './_components/form-store/form-store.component';
import {StoreRoutingModule} from './store.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AntProviderModule} from '../ant-provider.module';
import {FieldModule} from 'mht-test-libraries';
import {SharedModule} from '../shared/shared.module';
import {IconsProviderModule} from '../icons-provider.module';

@NgModule({
  declarations: [ListStoreComponent, DetailStoreComponent, FormStoreComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    IconsProviderModule,
    AntProviderModule,
    FormsModule,
    FieldModule
  ]
})
export class StoreModule {
}
