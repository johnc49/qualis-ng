import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditScoreComponent } from './credit-score.component';

const routes: Routes = [
  {
    path: '',
    component: CreditScoreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditScoreRoutingModule {}
