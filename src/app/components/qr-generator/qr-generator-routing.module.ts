import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QrGeneratorComponent } from './qr-generator.component';

import { PermissionGuard } from '../../core/guard/permission.guard';

const routes: Routes = [
  {
    path: '',
    component: QrGeneratorComponent,
    canActivate: [PermissionGuard],
    data: { 
      permission: 'theme_option.index' 
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeOptionRoutingModule { }
