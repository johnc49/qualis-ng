import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from 'src/app/components/pages/account/account.component';
import { AccountDetailsComponent } from 'src/app/components/pages/nested/account-details/account-details.component';
import { AccoutSetupProgressComponent } from 'src/app/components/pages/nested/accout-setup-progress/accout-setup-progress.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '',
        redirectTo: 'account-details',
        pathMatch: 'full',
      },
      {
        path: 'account-details',
        component: AccountDetailsComponent,
      },
      {
        path: 'account-setup',
        component: AccoutSetupProgressComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
