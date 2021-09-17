import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListAssetTypeComponent} from './_components/list-asset-type/list-asset-type.component';
import {DetailAssetTypeComponent} from './_components/detail-asset-type/detail-asset-type.component';
import {FormAssetTypeComponent} from './_components/form-asset-type/form-asset-type.component';
import {AssetTypeRoutingModule} from './asset-type.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AntProviderModule} from '../ant-provider.module';
import {FieldModule} from 'mht-test-libraries';
import {SharedModule} from '../shared/shared.module';
import {IconsProviderModule} from '../icons-provider.module';
@NgModule({
  declarations: [ListAssetTypeComponent, DetailAssetTypeComponent, FormAssetTypeComponent],
  imports: [
    CommonModule,
    AssetTypeRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    IconsProviderModule,
    AntProviderModule,
    FormsModule,
    FieldModule
  ]
})
export class AssetTypeModule {
}
