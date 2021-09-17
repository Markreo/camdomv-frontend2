import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListContractComponent} from './_components/list-contract/list-contract.component';
import {FormContractComponent} from './_components/form-contract/form-contract.component';
import {DetailContractComponent} from './_components/detail-contract/detail-contract.component';
import {ContractResolver} from './_resolvers/contract.resolver';

const routes: Routes = [
  {path: '', component: ListContractComponent},
  {
    path: 'form/:id',
    component: FormContractComponent,
    resolve: {
      object: ContractResolver
    }
  },
  {
    path: 'detail/:id',
    component: DetailContractComponent,
    resolve: {
      object: ContractResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule {
}
