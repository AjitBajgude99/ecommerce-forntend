import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { CategorymgmtComponent } from './admin/categorymgmt/categorymgmt.component';
import { ProductComponent } from './seller/product/product.component';
import { ShowproductComponent } from './buyer/showproduct/showproduct.component';
import { CartComponent } from './buyer/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    SellerComponent,
    BuyerComponent,
    CategorymgmtComponent,
    ProductComponent,
    ShowproductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
