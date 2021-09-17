import {ActivatedRouteSnapshot, Router, Resolve, RouterStateSnapshot} from '@angular/router';
import {LoanEntity} from '../_models/loan.entity';
import {LoanService} from '../_services/loan.service';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class LoanResolver implements Resolve<LoanEntity> {
  constructor(private loanService: LoanService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LoanEntity> {
    const id = route.paramMap.get('id');
    if (id === 'create') {
      return of(new LoanEntity());
    } else {
      return this.loanService.get(id).pipe(
        catchError(error => {
            this.router.navigateByUrl('/404');
            return of(null);
          }
        )
      );
    }
  }
}
