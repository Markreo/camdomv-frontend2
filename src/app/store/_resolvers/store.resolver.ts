import {ActivatedRouteSnapshot, Router, Resolve, RouterStateSnapshot} from '@angular/router';
import {StoreEntity} from '../_models/store.entity';
import {StoreService} from '../_services/store.service';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class StoreResolver implements Resolve<StoreEntity> {
  constructor(private storeService: StoreService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<StoreEntity> {
    const id = route.paramMap.get('id');
    if (id === 'create') {
      return of(new StoreEntity());
    } else {
      return this.storeService.get(id).pipe(
        catchError(error => {
            this.router.navigateByUrl('/404');
            return of(null);
          }
        )
      );
    }
  }
}
