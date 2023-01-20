import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReportsComponent } from 'src/app/components/pages/reports/reports.component';
import { NavbarModule } from '../shared/navbar.module';
import { SearchbarModule } from '../shared/searchbar.module';
import { ReportsRoutingModule } from './reports-routing.module';

@NgModule({
  declarations: [ReportsComponent],
  imports: [CommonModule, NavbarModule, SearchbarModule, ReportsRoutingModule],
  exports: [],
})
export class ReportsModule {}
