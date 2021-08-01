import {ActivatedRouteSnapshot, Router, Resolve, RouterStateSnapshot} from '@angular/router';
import {CustomerEntity} from '../_models/customer.entity';
import {CustomerService} from '../_services/customer.service';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class CustomerResolver implements Resolve<CustomerEntity> {
  constructor(private customerService: CustomerService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CustomerEntity> {
    const id = route.paramMap.get('id');
    if (id === 'create') {
      return of(new CustomerEntity());
    } else {
      return this.customerService.get(id).pipe(
        catchError(error => {
            this.router.navigateByUrl('/404');
            return of(null);
          }
        )
      );
    }
  }
}
