import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreditScoreComponent } from './credit-score.component';

@NgModule({
  declarations: [CreditScoreComponent],
  imports: [CommonModule],
  exports: [CreditScoreComponent],
})
export class CreditScoreModule {}
