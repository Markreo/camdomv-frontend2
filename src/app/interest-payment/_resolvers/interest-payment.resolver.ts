import {ActivatedRouteSnapshot, Router, Resolve, RouterStateSnapshot} from '@angular/router';
import {InterestPaymentEntity} from '../_models/interest-payment.entity';
import {InterestPaymentService} from '../_services/interest-payment.service';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class InterestPaymentResolver implements Resolve<InterestPaymentEntity> {
  constructor(private interestPaymentService: InterestPaymentService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<InterestPaymentEntity> {
    const id = route.paramMap.get('id');
    if (id === 'create') {
      return of(new InterestPaymentEntity());
    } else {
      return this.interestPaymentService.get(id).pipe(
        catchError(error => {
            this.router.navigateByUrl('/404');
            return of(null);
          }
        )
      );
    }
  }
}
