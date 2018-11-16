import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './in-memory-data.service';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { DiscountComponent } from './discount/discount.component';
import { FulldetailsComponent } from './fulldetails/fulldetails.component';
import { PaymentComponent } from './payment/payment.component';
import { SalesComponent } from './sales/sales.component';
import { TariffsComponent } from './tariffs/tariffs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    DiscountComponent,
    FulldetailsComponent,
    PaymentComponent,
    SalesComponent,
    TariffsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
