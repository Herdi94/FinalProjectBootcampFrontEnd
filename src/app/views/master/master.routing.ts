import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCategoryDeviceComponent} from './category-device/list-category-device/list-category-device.component';
import {NewCategoryDeviceComponent} from './category-device/new-category-device/new-category-device.component';
import {UpdateCategoryDeviceComponent} from './category-device/update-category-device/update-category-device.component';
import {ListCategoryColorComponent} from './category-color/list-category-color/list-category-color.component';
import {NewCategoryColorComponent} from './category-color/new-category-color/new-category-color.component';
import {UpdateCategoryColorComponent} from './category-color/update-category-color/update-category-color.component';
import {ListCategoryBrandComponent} from './category-brand/list-category-brand/list-category-brand.component';
import {NewCategoryBrandComponent} from './category-brand/new-category-brand/new-category-brand.component';
import {UpdateCategoryBrandComponent} from './category-brand/update-category-brand/update-category-brand.component';
import {ListDeviceConditionComponent} from './device-condition/list-device-condition/list-device-condition.component';
import {NewDeviceConditionComponent} from './device-condition/new-device-condition/new-device-condition.component';
import {UpdateDeviceConditionComponent} from './device-condition/update-device-condition/update-device-condition.component';
import {ListCapacityUnitComponent} from './capacity-unit/list-capacity-unit/list-capacity-unit.component';
import {NewCapacityUnitComponent} from './capacity-unit/new-capacity-unit/new-capacity-unit.component';
import {UpdateCapacityUnitComponent} from './capacity-unit/update-capacity-unit/update-capacity-unit.component';
import {ListLoanStatusComponent} from './loan-status/list-loan-status/list-loan-status.component';
import {NewLoanStatusComponent} from './loan-status/new-loan-status/new-loan-status.component';
import {UpdateLoanStatusComponent} from './loan-status/update-loan-status/update-loan-status.component';
import {ListDeviceComponent} from './device/list-device/list-device.component';
import {NewDeviceComponent} from './device/new-device/new-device.component';
import {UpdateDeviceComponent} from './device/update-device/update-device.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Master'
    },
    children: [
      {
        path: 'category-device',
        component: ListCategoryDeviceComponent,
        data: {
          title: 'Category of Devices'
        }
      },
      {
        path: 'category-device/new',
        component: NewCategoryDeviceComponent,
        data: {
          title: 'New category of device'
        }
      },
      {
        path: 'category-device/:id',
        component: UpdateCategoryDeviceComponent,
        data: {
          title: 'Update a category of device'
        }
      },
      {
        path: 'category-color',
        component: ListCategoryColorComponent,
        data: {
          title: 'Device of Color'
        }
      },
      {
        path: 'category-color/new',
        component: NewCategoryColorComponent,
        data: {
          title: 'New device of color'
        }
      },
      {
        path: 'category-color/:id',
        component: UpdateCategoryColorComponent,
        data: {
          title: 'Update a device of color'
        }
      },
      {
        path: 'category-brand',
        component: ListCategoryBrandComponent,
        data: {
          title: 'Device of Brand'
        }
      },
      {
        path: 'category-brand/new',
        component: NewCategoryBrandComponent,
        data: {
          title: 'New device of brand'
        }
      },
      {
        path: 'category-brand/:id',
        component: UpdateCategoryBrandComponent,
        data: {
          title: 'Update a device of brand'
        }
      },
      {
        path: 'device-condition',
        component: ListDeviceConditionComponent,
        data: {
          title: 'Device of Condition'
        }
      },
      {
        path: 'device-condition/new',
        component: NewDeviceConditionComponent,
        data: {
          title: 'New device of condition'
        }
      },
      {
        path: 'device-condition/:id',
        component: UpdateDeviceConditionComponent,
        data: {
          title: 'Update a device of condition'
        }
      },
      {
        path: 'capacity-unit',
        component: ListCapacityUnitComponent,
        data: {
          title: 'Unit of Capacity'
        }
      },
      {
        path: 'capacity-unit/new',
        component: NewCapacityUnitComponent,
        data: {
          title: 'New unit of capacity'
        }
      },
      {
        path: 'capacity-unit/:id',
        component: UpdateCapacityUnitComponent,
        data: {
          title: 'Update a unit of capacity'
        }
      },
      {
        path: 'loan-status',
        component: ListLoanStatusComponent,
        data: {
          title: 'Loan of Status'
        }
      },
      {
        path: 'loan-status/new',
        component: NewLoanStatusComponent,
        data: {
          title: 'New loan of status'
        }
      },
      {
        path: 'loan-status/:id',
        component: UpdateLoanStatusComponent,
        data: {
          title: 'Update a loan of status'
        }
      },
      {
        path: 'device',
        component: ListDeviceComponent,
        data: {
          title: 'Device'
        }
      },
      {
        path: 'device/new',
        component: NewDeviceComponent,
        data: {
          title: 'New device'
        }
      },
      {
        path: 'device/:id',
        component: UpdateDeviceComponent,
        data: {
          title: 'Update a device'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRouting {
}
