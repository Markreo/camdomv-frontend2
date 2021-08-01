import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserModule} from './user/user.module';

const routes: Routes = [
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: 'store', loadChildren: () => import('./store/store.module').then(m => m.StoreModule)},
  {path: 'director', loadChildren: () => import('./director/director.module').then(m => m.DirectorModule)},
  {path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
