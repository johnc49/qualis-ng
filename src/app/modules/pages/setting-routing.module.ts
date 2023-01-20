import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountSettingComponent } from 'src/app/components/pages/nested/settings/account-setting/account-setting.component';
import { CrbComponent } from 'src/app/components/pages/nested/settings/crb/crb.component';
import { CreditScoreComponent } from 'src/app/components/pages/nested/settings/credit-score/credit-score.component';
import { PaymentSettingComponent } from 'src/app/components/pages/nested/settings/payment-setting/payment-setting.component';

import { SettingComponent } from 'src/app/components/pages/setting/setting.component';

const routes: Routes = [
  {
    path: '',
    component: SettingComponent,
    children: [
      {
        path: '',
        redirectTo: 'account-setting',
        pathMatch: 'full',
      },
      {
        path: 'account-setting',
        component: AccountSettingComponent,
      },
      {
        path: 'payment-setting',
        component: PaymentSettingComponent,
      },
      {
        path: 'credit-score',
        component: CreditScoreComponent,
      },
      {
        path: 'crb',
        component: CrbComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule {}
