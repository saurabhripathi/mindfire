import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { AirportComponent } from './airport/airport.component';
import {TableModule} from 'primeng/table';
import { AircraftComponent } from './aircraft/aircraft.component';
import { LayoutComponent } from './layout/layout.component';
import { TransactionComponent } from './transaction/transaction.component';
import {SidebarModule} from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox'
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import { FuelReportComponent } from './fuel-report/fuel-report.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AirportComponent,
    AircraftComponent,
    LayoutComponent,
    TransactionComponent,
    FuelReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    SidebarModule,
    BrowserAnimationsModule,
    CheckboxModule,
    DropdownModule,
    InputNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
