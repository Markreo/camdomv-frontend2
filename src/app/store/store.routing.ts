import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListStoreComponent} from './_components/list-store/list-store.component';
import {FormStoreComponent} from './_components/form-store/form-store.component';
import {DetailStoreComponent} from './_components/detail-store/detail-store.component';
import {StoreResolver} from './_resolvers/store.resolver';

const routes: Routes = [
  {path: '', component: ListStoreComponent},
  {
    path: 'form/:id',
    component: FormStoreComponent,
    resolve: {
      object: StoreResolver
    }
  },
  {
    path: 'detail/:id',
    component: DetailStoreComponent,
    resolve: {
      object: StoreResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule {
}
