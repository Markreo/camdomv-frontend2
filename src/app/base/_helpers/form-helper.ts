import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseService} from '../_services/base.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {BaseField} from 'mht-test-libraries';
import {BaseEntity} from '../_models/base.entity';
import {AppInjector} from '../../app-injector';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  template: ``
})
// tslint:disable-next-line:component-class-suffix
export abstract class FormHelper<T extends BaseEntity = BaseEntity> implements OnInit, OnDestroy { // for 1 fields
  abstract fields: BaseField[] = [];
  form: FormGroup;
  submitting = false;
  protected onDestroy$: Subject<boolean> = new Subject<boolean>();

  private activatedRoute: ActivatedRoute;
  private baseService: BaseService<T>;
  protected router: Router = AppInjector.get(Router);
  protected nzMessageService: NzMessageService = AppInjector.get(NzMessageService);

  private object: Partial<T>;

  protected constructor(activated: ActivatedRoute, base: BaseService<T>) {
    this.activatedRoute = activated;
    this.baseService = base;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      console.log('data', data);
      if (data.object) {
        this.init(data.object);
      }
    });
  }

  init(object): void {
    this.object = object;
    this.form = this.buildForm(object);
  }

  buildForm(data: Partial<T> = {}): FormGroup {
    const form = new FormGroup({
      id: new FormControl(data.id)
    });
    this.fields.forEach((field: BaseField) => {
      const formControl = new FormControl({value: data[field.key], disabled: field.disabled}, field.validators);
      form.addControl(field.key, formControl);
    });
    return form;
  }


  handleSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const api = this.object.id ? this.getApiUpdate(this.object.id, {...this.object, ...this.form.value}) : this.getApiCreate(this.form.value);
      api.subscribe(entity => {
        this.submitting = false;
        this.router.navigate([this.baseService.routerLink(), 'detail', entity.id]);
        this.nzMessageService.success('Thao tác thành công!');
      }, error => {
        this.submitting = false;
        if (error.status === 400) {
          // this.notification.create(
          //   'error',
          //   'Thao tác bị lỗi:',
          //   handleForm400ErrorHelper(error)
          // );
        }
      });
    }
  }

  getApiCreate(data): Observable<Partial<T>> {
    return this.baseService.create(data);
  }

  getApiUpdate(id, data): Observable<Partial<T>> {
    return this.baseService.update(id, data);
  }


  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
