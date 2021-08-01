import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NZ_I18N, vi_VN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IconsProviderModule} from './icons-provider.module';
import {setAppInjector} from './app-injector';
import {BuildEndpointFactory, FormatDateFactory, FieldModule} from 'mht-test-libraries';
import {BuildEndpointApiFactory} from './build-endpoint-api.factory';
import {BuildFormatDateFactory} from './format-date.factory';
import {AntProviderModule} from './ant-provider.module';
import vi from '@angular/common/locales/vi';

registerLocaleData(vi);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    AntProviderModule,
    FieldModule.forRoot({
      buildEndpointFactory: {
        provide: BuildEndpointFactory,
        useClass: BuildEndpointApiFactory
      },
      formatDateFactory: {
        provide: FormatDateFactory,
        useClass: BuildFormatDateFactory
      }
    })
  ],
  providers: [
    {provide: NZ_I18N, useValue: vi_VN}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    setAppInjector(injector);
  }
}
