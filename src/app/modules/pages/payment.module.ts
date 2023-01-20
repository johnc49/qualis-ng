import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoanRepaymentsModule } from 'src/app/components/pages/nested/loan-repayments/loan-repayments.module';
import { PaymentsModule } from 'src/app/components/pages/nested/payments/payments.module';
import { PaymentComponent } from 'src/app/components/pages/payment/payment.component';
import { NavbarModule } from '../shared/navbar.module';
import { SearchbarModule } from '../shared/searchbar.module';
import { PaymentRoutingModule } from './payment-routing.module';

@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    NavbarModule,
    SearchbarModule,
    PaymentRoutingModule,
    LoanRepaymentsModule,
    PaymentsModule,
  ],
  exports: [],
})
export class PaymentModule {}
