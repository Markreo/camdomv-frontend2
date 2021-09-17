import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListLoanComponent} from './_components/list-loan/list-loan.component';
import {FormLoanComponent} from './_components/form-loan/form-loan.component';
import {DetailLoanComponent} from './_components/detail-loan/detail-loan.component';
import {LoanResolver} from './_resolvers/loan.resolver';

const routes: Routes = [
  {path: '', component: ListLoanComponent},
  {
    path: 'form/:id',
    component: FormLoanComponent,
    resolve: {
      object: LoanResolver
    }
  },
  {
    path: 'detail/:id',
    component: DetailLoanComponent,
    resolve: {
      object: LoanResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule {
}
