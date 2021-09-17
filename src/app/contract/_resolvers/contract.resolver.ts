import {ActivatedRouteSnapshot, Router, Resolve, RouterStateSnapshot} from '@angular/router';
import {ContractEntity} from '../_models/contract.entity';
import {ContractService} from '../_services/contract.service';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class ContractResolver implements Resolve<ContractEntity> {
  constructor(private contractService: ContractService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ContractEntity> {
    const id = route.paramMap.get('id');
    if (id === 'create') {
      return of(new ContractEntity());
    } else {
      return this.contractService.get(id).pipe(
        catchError(error => {
            this.router.navigateByUrl('/404');
            return of(null);
          }
        )
      );
    }
  }
}
