import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountComponent } from 'src/app/components/pages/account/account.component';
import { AccountDetailsModule } from 'src/app/components/pages/nested/account-details/accout-details.module';
import { AccountSettingModule } from 'src/app/components/pages/nested/settings/account-setting/account-setting.module';
import { NavbarModule } from '../shared/navbar.module';
import { SearchbarModule } from '../shared/searchbar.module';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    NavbarModule,
    SearchbarModule,
    AccountRoutingModule,
    AccountDetailsModule,
    AccountSettingModule,
  ],
  exports: [],
})
export class AccountModule {}
