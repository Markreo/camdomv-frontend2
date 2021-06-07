import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListDirectorComponent} from './_components/list-director/list-director.component';
import {FormDirectorComponent} from './_components/form-director/form-director.component';
import {DetailDirectorComponent} from './_components/detail-director/detail-director.component';
import {DirectorResolver} from './_resolvers/director.resolver';

const routes: Routes = [
  {path: '', component: ListDirectorComponent},
  {
    path: 'form/:id',
    component: FormDirectorComponent,
    resolve: {
      object: DirectorResolver
    }
  },
  {
    path: 'detail/:id',
    component: DetailDirectorComponent,
    resolve: {
      object: DirectorResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorRoutingModule {
}
