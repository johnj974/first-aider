import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ShopRoutingModule } from './shop-routing.module';
import { MainShopComponent } from './main-shop/main-shop.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [MainShopComponent, ProductsComponent, CheckoutComponent],
  imports: [CommonModule, ShopRoutingModule, SharedModule, ReactiveFormsModule],
})
export class ShopModule {}
