import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AccountSettingComponent } from './account-setting.component';

@NgModule({
  declarations: [AccountSettingComponent],
  imports: [CommonModule, FormsModule],
  exports: [AccountSettingComponent],
})
export class AccountSettingModule {}
