import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {BaseService} from '../_services/base.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {BaseField} from 'mht-test-libraries';

@Component({
  template: ``
})
// tslint:disable-next-line:component-class-suffix
export abstract class FormHelper<T> implements OnInit, OnDestroy { // for 1 fields
  abstract fields: BaseField[] = [];
  form: FormGroup;
  submitting = false;
  protected onDestroy$: Subject<boolean> = new Subject<boolean>();

  private activatedRoute: ActivatedRoute;
  private baseService: BaseService<T>;

  protected constructor(activated: ActivatedRoute, base: BaseService<T>) {
    this.activatedRoute = activated;
    this.baseService = base;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      if (data.object) {
        this.form = this.buildForm(data.object);
        console.log('form', this.form.controls);
      }
    });
  }

  buildForm(data: Partial<T> = {}): FormGroup {
    const form = new FormGroup({});
    this.fields.forEach((field: BaseField) => {
      const formControl = new FormControl({value: data[field.key], disabled: field.disabled}, field.validators);
      form.addControl(field.key, formControl);
    });
    return form;
  }


  handleSubmit(): void {

  }


  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
