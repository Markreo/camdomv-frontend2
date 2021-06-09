import {BaseEntity} from '../_models/base.entity';
import {Observable, of} from 'rxjs';
import {buildUrl} from '../../build-endpoint-api.factory';
import {HttpClient} from '@angular/common/http';
import {AppInjector} from '../../app-injector';
import {catchError, map} from 'rxjs/operators';
import {CreateQueryParams, RequestQueryBuilder} from '@nestjsx/crud-request';
import {BaseField} from 'mht-test-libraries';

export type ResultPagination<T> = { data: T[], count: number, page: number, total: number, pageCount: number };

export abstract class BaseService<T extends BaseEntity = BaseEntity> {
  protected http: HttpClient = AppInjector.get(HttpClient);
  abstract endpoint: string;
  abstract module: { [p: string]: BaseField };

  abstract createInstance(entity: Partial<T>): T;

  routerLink(): string {
    return this.endpoint;
  }

  get(id: string): Observable<T> {
    return this.http.get<T>(buildUrl(this.endpoint) + '/' + id).pipe(
      map(resp => this.createInstance(resp))
    );
  }

  getAll<K extends { data: T[], count: number, page: number, total: number, pageCount: number }>(): Observable<K> {
    return this.http.get<K>(buildUrl(this.endpoint)).pipe(
      map((resp: any) => {
        if (resp.data && Array.isArray(resp.data)) {
          resp.data = resp.data.map(d => this.createInstance(d));
        }
        return resp;
      })
    );
  }

  getWithFilter<K extends ResultPagination<T>>(filter: CreateQueryParams): Observable<K> {
    const queryString = RequestQueryBuilder.create(filter).query();
    return this.http.get<K>(buildUrl(this.endpoint) + '?' + queryString).pipe(
      catchError(resp => {
        return of(undefined);
      })
    );
  }


  create(data: any): Observable<T> {
    const {id, ...dataWithoutId} = data;
    return this.http.post<T>(buildUrl(this.endpoint), dataWithoutId).pipe(
      map(resp => this.createInstance(resp))
    );
  }


  update(id: string, data: any): Observable<T> {
    return this.http.put<T>(buildUrl(this.endpoint) + '/' + id, data).pipe(
      map(resp => this.createInstance(resp))
    );
  }

  patch(id: string, data: any): Observable<T> {
    return this.http.patch<T>(buildUrl(this.endpoint) + '/' + id, data).pipe(
      map(resp => this.createInstance(resp))
    );
  }

  delete(id: string): Observable<any> {
    return this.http.delete(buildUrl(this.endpoint) + '/' + id);
  }

}
