import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountSettingModule } from 'src/app/components/pages/nested/settings/account-setting/account-setting.module';
import { CrbModule } from 'src/app/components/pages/nested/settings/crb/crb.module';
import { CreditScoreModule } from 'src/app/components/pages/nested/settings/credit-score/credit-score.module';
import { PaymentSettingModule } from 'src/app/components/pages/nested/settings/payment-setting/payment-setting.module';
import { SettingComponent } from 'src/app/components/pages/setting/setting.component';
import { NavbarModule } from '../shared/navbar.module';
import { SearchbarModule } from '../shared/searchbar.module';
import { SettingRoutingModule } from './setting-routing.module';

@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    NavbarModule,
    SearchbarModule,
    SettingRoutingModule,
    AccountSettingModule,
    CrbModule,
    CreditScoreModule,
    PaymentSettingModule,
  ],
  exports: [],
})
export class SettingModule {}
