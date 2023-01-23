import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccoutSetupProgressComponent } from './accout-setup-progress.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AccoutSetupProgressComponent],
  imports: [CommonModule, NgbTooltipModule],
  exports: [AccoutSetupProgressComponent],
})
export class AccoutSetupProgressModule {}
