import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/pages/home/home.component';
import { PaymentComponent } from './components/pages/payment/payment.component';
import { AccountComponent } from './components/pages/account/account.component';
import { ReportsComponent } from './components/pages/reports/reports.component';
import { SettingComponent } from './components/pages/setting/setting.component';
import { SearchbarComponent } from './components/shared/searchbar/searchbar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentComponent,
    AccountComponent,
    ReportsComponent,
    SettingComponent,
    SearchbarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
