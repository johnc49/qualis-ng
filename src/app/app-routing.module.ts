import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/pages/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./modules/pages/payment.module').then((m) => m.PaymentModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./modules/pages/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./modules/pages/reports.module').then((m) => m.ReportsModule),
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('./modules/pages/setting.module').then((m) => m.SettingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
