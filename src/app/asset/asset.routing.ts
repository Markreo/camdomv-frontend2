import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListAssetComponent} from './_components/list-asset/list-asset.component';
import {FormAssetComponent} from './_components/form-asset/form-asset.component';
import {DetailAssetComponent} from './_components/detail-asset/detail-asset.component';
import {AssetResolver} from './_resolvers/asset.resolver';

const routes: Routes = [
  {path: '', component: ListAssetComponent},
  {
    path: 'form/:id',
    component: FormAssetComponent,
    resolve: {
      object: AssetResolver
    }
  },
  {
    path: 'detail/:id',
    component: DetailAssetComponent,
    resolve: {
      object: AssetResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule {
}
