import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product.model';
import { ShopService } from 'src/app/shared/services/shop.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  //.
  checkoutCart: ProductModel[] = [];

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.checkoutCart = this.shopService.serviceCart;
    console.log(this.checkoutCart);
  }
}
