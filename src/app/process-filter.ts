import {Observable, Subject} from 'rxjs';
import {catchError, debounceTime, switchMap, tap} from 'rxjs/operators';
import {SCondition} from '@nestjsx/crud-request/lib/types';
import {CreateQueryParams} from '@nestjsx/crud-request';

interface Options {
  initFilter: CreateQueryParams;
}

export class ProcessFilter {
  filterSubject = new Subject();
  filterObject: CreateQueryParams = {
    limit: 20,
    page: 1
  };
  loading = false;
  total = 0;

  // tslint:disable-next-line:variable-name
  private _initFilter = this.filterObject;

  constructor(options: Partial<Options> = {}) {
    if (options.initFilter) {
      this.initFilterObject(options.initFilter);
    }
  }

  initFilterObject(init: CreateQueryParams = {}): void {
    this.filterObject = Object.assign(this.filterObject, init);
    this._initFilter = this.filterObject;
  }

  subscribeData<T extends { data: any[], count: number, page: number, total: number, pageCount: number }, K = string>(something: (filter: CreateQueryParams, ...arg: string[]) => Observable<T>, ...arg: string[]): Observable<T> {
    return this.filterSubject.pipe(
      debounceTime(300),
      switchMap(filter => {
        return something(filter, ...arg);
      }),
      tap(resp => {
        if (resp && resp.total) {
          this.total = resp.total;
        }
        this.loading = false;
      }),
      catchError(error => {
        this.loading = false;
        throw error;
      })
    );
  }

  updateData(): void {
    this.loading = true;
    this.filterSubject.next(this.filterObject);
  }

  updateSearch(str): void {
    this.filterObject.search = this.buildSearch(str);
    this.updateData();
  }

  buildSearch(searchStr): SCondition {
    console.warn('build search null');
    return {};
  }

  updatePageIndex(index): void {
    console.log(index);
    this.filterObject.page = index;
    this.updateData();

  }

  updatePageSize(size): void {
    this.filterObject.limit = size;
    this.updatePageIndex(1);
  }


}
