import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaymentSettingRoutingModule } from './payment-setting-routing.module';

import { PaymentSettingComponent } from './payment-setting.component';

@NgModule({
  declarations: [PaymentSettingComponent],
  imports: [
    CommonModule,
    PaymentSettingRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [PaymentSettingComponent],
})
export class PaymentSettingModule {}
