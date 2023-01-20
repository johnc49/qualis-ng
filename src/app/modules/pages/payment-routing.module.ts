import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanRepaymentsComponent } from 'src/app/components/pages/nested/loan-repayments/loan-repayments.component';
import { PaymentsComponent } from 'src/app/components/pages/nested/payments/payments.component';
import { PaymentComponent } from 'src/app/components/pages/payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentComponent,
    children: [
      {
        path: '',
        redirectTo: 'payments',
        pathMatch: 'full',
      },
      {
        path: 'payments',
        component: PaymentsComponent,
      },
      {
        path: 'loan-repayment',
        component: LoanRepaymentsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule {}
