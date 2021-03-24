import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { MainShopComponent } from './main-shop/main-shop.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainShopComponent, ProductsComponent],
  imports: [CommonModule, ShopRoutingModule, SharedModule],
})
export class ShopModule {}
