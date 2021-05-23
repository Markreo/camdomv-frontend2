import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UserEntity} from '../_models/user.entity';
import {UserService} from '../_services/user.service';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})
export class UserResolver implements Resolve<UserEntity> {
  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserEntity> {
    const id = route.paramMap.get('id');
    if (id === 'create') {
      return of(new UserEntity());
    } else {
      return this.userService.get(id);
    }
  }
}
