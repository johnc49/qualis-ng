import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProgressBarModule } from 'ngx-progress-bar';
import { CreditScoreComponent } from './credit-score.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [CreditScoreComponent],
  imports: [CommonModule, RoundProgressModule],
  exports: [CreditScoreComponent],
})
export class CreditScoreModule {}
