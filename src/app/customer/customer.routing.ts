import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListCustomerComponent} from './_components/list-customer/list-customer.component';
import {FormCustomerComponent} from './_components/form-customer/form-customer.component';
import {DetailCustomerComponent} from './_components/detail-customer/detail-customer.component';
import {CustomerResolver} from './_resolvers/customer.resolver';

const routes: Routes = [
  {path: '', component: ListCustomerComponent},
  {
    path: 'form/:id',
    component: FormCustomerComponent,
    resolve: {
      object: CustomerResolver
    }
  },
  {
    path: 'detail/:id',
    component: DetailCustomerComponent,
    resolve: {
      object: CustomerResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
