import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserModule} from './user/user.module';

const routes: Routes = [
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
