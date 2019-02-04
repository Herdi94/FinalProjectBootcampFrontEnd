import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MasterRouting} from './master.routing';
import {ListCategoryDeviceComponent} from './category-device/list-category-device/list-category-device.component';
import {NewCategoryDeviceComponent} from './category-device/new-category-device/new-category-device.component';
import {UpdateCategoryDeviceComponent} from './category-device/update-category-device/update-category-device.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {CategoryDeviceService} from './category-device/category-device.service';
import {AuthenticationInterceptor} from '../../_auth/auth.interceptor';
import {DataTablesModule} from 'angular-datatables';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {AlertModule, ModalModule} from 'ngx-bootstrap';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import { ListCategoryColorComponent } from './category-color/list-category-color/list-category-color.component';
import { NewCategoryColorComponent } from './category-color/new-category-color/new-category-color.component';
import { UpdateCategoryColorComponent } from './category-color/update-category-color/update-category-color.component';
import {CategoryColorService} from './category-color/category-color.service';
import { ListCategoryBrandComponent } from './category-brand/list-category-brand/list-category-brand.component';
import { NewCategoryBrandComponent } from './category-brand/new-category-brand/new-category-brand.component';
import { UpdateCategoryBrandComponent } from './category-brand/update-category-brand/update-category-brand.component';
import {CategoryBrandService} from './category-brand/category-brand.service';
import { ListDeviceConditionComponent } from './device-condition/list-device-condition/list-device-condition.component';
import { NewDeviceConditionComponent } from './device-condition/new-device-condition/new-device-condition.component';
import { UpdateDeviceConditionComponent } from './device-condition/update-device-condition/update-device-condition.component';
import {DeviceConditionService} from './device-condition/device-condition.service';
import { ListCapacityUnitComponent } from './capacity-unit/list-capacity-unit/list-capacity-unit.component';
import { NewCapacityUnitComponent } from './capacity-unit/new-capacity-unit/new-capacity-unit.component';
import { UpdateCapacityUnitComponent } from './capacity-unit/update-capacity-unit/update-capacity-unit.component';
import {CapacityUnitService} from './capacity-unit/capacity-unit.service';
import { ListLoanStatusComponent } from './loan-status/list-loan-status/list-loan-status.component';
import { NewLoanStatusComponent } from './loan-status/new-loan-status/new-loan-status.component';
import { UpdateLoanStatusComponent } from './loan-status/update-loan-status/update-loan-status.component';
import {LoanStatusService} from './loan-status/loan-status.service';
import {ListDeviceComponent} from './device/list-device/list-device.component';
import {NewDeviceComponent} from './device/new-device/new-device.component';
import {UpdateDeviceComponent} from './device/update-device/update-device.component';
import {DeviceService} from './device/device.service';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    MasterRouting,
    AlertModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    ModalModule.forRoot(),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [
    ListCategoryDeviceComponent,
    NewCategoryDeviceComponent,
    UpdateCategoryDeviceComponent,
    ListCategoryColorComponent,
    NewCategoryColorComponent,
    UpdateCategoryColorComponent,
    ListCategoryBrandComponent,
    NewCategoryBrandComponent,
    UpdateCategoryBrandComponent,
    ListDeviceConditionComponent,
    NewDeviceConditionComponent,
    UpdateDeviceConditionComponent,
    ListCapacityUnitComponent,
    NewCapacityUnitComponent,
    UpdateCapacityUnitComponent,
    ListLoanStatusComponent,
    NewLoanStatusComponent,
    UpdateLoanStatusComponent,
    ListDeviceComponent,
    NewDeviceComponent,
    UpdateDeviceComponent
  ], providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthenticationInterceptor
    },
    CategoryDeviceService,
    CategoryColorService,
    CategoryBrandService,
    DeviceConditionService,
    CapacityUnitService,
    LoanStatusService,
    DeviceService
  ]
})
export class MasterModule {
}
