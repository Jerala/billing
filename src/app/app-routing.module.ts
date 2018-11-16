import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailComponent} from './detail/detail.component';
import {HomeComponent} from './home/home.component';
import {DiscountComponent} from './discount/discount.component';
import {TariffsComponent} from './tariffs/tariffs.component';
import {FulldetailsComponent} from './fulldetails/fulldetails.component';
import {SalesComponent} from './sales/sales.component';
import {PaymentComponent} from './payment/payment.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'detail', component: DetailComponent },
  { path: 'detail/:id', component: FulldetailsComponent},
  { path: 'discounts', component: DiscountComponent},
  { path: 'tariffs', component: TariffsComponent},
  { path: 'sales', component: SalesComponent},
  { path: 'payment', component: PaymentComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
