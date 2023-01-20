import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaymentsComponent } from './payments.component';

@NgModule({
  declarations: [PaymentsComponent],
  imports: [CommonModule],
  exports: [PaymentsComponent],
})
export class PaymentsModule {}
