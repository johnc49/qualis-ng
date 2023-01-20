import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaymentSettingComponent } from './payment-setting.component';

@NgModule({
  declarations: [PaymentSettingComponent],
  imports: [CommonModule],
  exports: [PaymentSettingComponent],
})
export class PaymentSettingModule {}
