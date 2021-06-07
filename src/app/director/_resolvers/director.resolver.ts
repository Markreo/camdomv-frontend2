import {ActivatedRouteSnapshot, Router, Resolve, RouterStateSnapshot} from '@angular/router';
import {DirectorEntity} from '../_models/director.entity';
import {DirectorService} from '../_services/director.service';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class DirectorResolver implements Resolve<DirectorEntity> {
  constructor(private directorService: DirectorService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DirectorEntity> {
    const id = route.paramMap.get('id');
    if (id === 'create') {
      return of(new DirectorEntity());
    } else {
      return this.directorService.get(id).pipe(
        catchError(error => {
            this.router.navigateByUrl('/404');
            return of(null);
          }
        )
      );
    }
  }
}
