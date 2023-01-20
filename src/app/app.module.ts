import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './modules/pages/home.module';
import { AccountModule } from './modules/pages/account.module';
import { PaymentModule } from './modules/pages/payment.module';
import { ReportsModule } from './modules/pages/reports.module';
import { SettingModule } from './modules/pages/setting.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    HomeModule,
    AccountModule,
    PaymentModule,
    ReportsModule,
    SettingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
