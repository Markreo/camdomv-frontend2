import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListInterestPaymentComponent} from './_components/list-interest-payment/list-interest-payment.component';
import {FormInterestPaymentComponent} from './_components/form-interest-payment/form-interest-payment.component';
import {DetailInterestPaymentComponent} from './_components/detail-interest-payment/detail-interest-payment.component';
import {InterestPaymentResolver} from './_resolvers/interest-payment.resolver';

const routes: Routes = [
  {path: '', component: ListInterestPaymentComponent},
  {
    path: 'form/:id',
    component: FormInterestPaymentComponent,
    resolve: {
      object: InterestPaymentResolver
    }
  },
  {
    path: 'detail/:id',
    component: DetailInterestPaymentComponent,
    resolve: {
      object: InterestPaymentResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterestPaymentRoutingModule {
}
