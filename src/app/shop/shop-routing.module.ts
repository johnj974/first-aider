import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainShopComponent } from './main-shop/main-shop.component';

const routes: Routes = [{ path: '', component: MainShopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
