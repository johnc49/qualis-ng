import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountDetailsComponent } from './account-details.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AccountDetailsComponent],
  imports: [CommonModule, NgbTooltipModule],
  exports: [AccountDetailsComponent],
})
export class AccountDetailsModule {}
