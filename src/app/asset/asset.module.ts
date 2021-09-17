import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListAssetComponent} from './_components/list-asset/list-asset.component';
import {DetailAssetComponent} from './_components/detail-asset/detail-asset.component';
import {FormAssetComponent} from './_components/form-asset/form-asset.component';
import {AssetRoutingModule} from './asset.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AntProviderModule} from '../ant-provider.module';
import {FieldModule} from 'mht-test-libraries';
import {SharedModule} from '../shared/shared.module';
import {IconsProviderModule} from '../icons-provider.module';
@NgModule({
  declarations: [ListAssetComponent, DetailAssetComponent, FormAssetComponent],
  imports: [
    CommonModule,
    AssetRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    IconsProviderModule,
    AntProviderModule,
    FormsModule,
    FieldModule
  ]
})
export class AssetModule {
}
