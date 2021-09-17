import {ActivatedRouteSnapshot, Router, Resolve, RouterStateSnapshot} from '@angular/router';
import {AssetEntity} from '../_models/asset.entity';
import {AssetService} from '../_services/asset.service';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class AssetResolver implements Resolve<AssetEntity> {
  constructor(private assetService: AssetService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AssetEntity> {
    const id = route.paramMap.get('id');
    if (id === 'create') {
      return of(new AssetEntity());
    } else {
      return this.assetService.get(id).pipe(
        catchError(error => {
            this.router.navigateByUrl('/404');
            return of(null);
          }
        )
      );
    }
  }
}
