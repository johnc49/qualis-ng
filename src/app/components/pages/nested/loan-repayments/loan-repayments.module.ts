import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoanRepaymentsComponent } from './loan-repayments.component';

@NgModule({
  declarations: [LoanRepaymentsComponent],
  imports: [CommonModule],
  exports: [LoanRepaymentsComponent],
})
export class LoanRepaymentsModule {}
