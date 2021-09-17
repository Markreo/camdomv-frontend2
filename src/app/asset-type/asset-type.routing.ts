import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListAssetTypeComponent} from './_components/list-asset-type/list-asset-type.component';
import {FormAssetTypeComponent} from './_components/form-asset-type/form-asset-type.component';
import {DetailAssetTypeComponent} from './_components/detail-asset-type/detail-asset-type.component';
import {AssetTypeResolver} from './_resolvers/asset-type.resolver';

const routes: Routes = [
  {path: '', component: ListAssetTypeComponent},
  {
    path: 'form/:id',
    component: FormAssetTypeComponent,
    resolve: {
      object: AssetTypeResolver
    }
  },
  {
    path: 'detail/:id',
    component: DetailAssetTypeComponent,
    resolve: {
      object: AssetTypeResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetTypeRoutingModule {
}
