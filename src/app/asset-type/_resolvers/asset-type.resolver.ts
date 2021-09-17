import {ActivatedRouteSnapshot, Router, Resolve, RouterStateSnapshot} from '@angular/router';
import {AssetTypeEntity} from '../_models/asset-type.entity';
import {AssetTypeService} from '../_services/asset-type.service';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class AssetTypeResolver implements Resolve<AssetTypeEntity> {
  constructor(private assetTypeService: AssetTypeService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AssetTypeEntity> {
    const id = route.paramMap.get('id');
    if (id === 'create') {
      return of(new AssetTypeEntity());
    } else {
      return this.assetTypeService.get(id).pipe(
        catchError(error => {
            this.router.navigateByUrl('/404');
            return of(null);
          }
        )
      );
    }
  }
}
