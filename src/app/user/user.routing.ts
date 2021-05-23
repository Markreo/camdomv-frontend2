import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListUserComponent} from './_components/list-user/list-user.component';
import {FormUserComponent} from './_components/form-user/form-user.component';
import {DetailUserComponent} from './_components/detail-user/detail-user.component';
import {UserResolver} from './_resolvers/user.resolver';

const routes: Routes = [
  {path: '', component: ListUserComponent},
  {
    path: 'form/:id',
    component: FormUserComponent,
    resolve: {
      object: UserResolver
    }
  },
  {
    path: 'detail/:id',
    component: DetailUserComponent,
    resolve: {
      object: UserResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
