import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AirportComponent } from './airport/airport.component';
import { AircraftComponent } from './aircraft/aircraft.component';
import { LayoutComponent } from './layout/layout.component';
import { TransactionComponent } from './transaction/transaction.component';
import { FuelReportComponent } from './fuel-report/fuel-report.component';


const routes: Routes = [{path : 'login',component: LoginComponent},
{path : 'home',component: LayoutComponent,children:
[{path : 'airports',component: AirportComponent},
{path : 'aircrafts',component: AircraftComponent},
{path : 'transaction',component: TransactionComponent},
{path : 'fuel-report',component: FuelReportComponent}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
