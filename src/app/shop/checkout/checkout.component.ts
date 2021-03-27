import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  checkOutForm: FormGroup;

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.checkoutCart = this.shopService.serviceCart;
    console.log(this.checkoutCart);

    this.checkOutForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),
      addressOne: new FormControl(null),
      addressTwo: new FormControl(null),
      areaCode: new FormControl(null),
    });
  }

  onCheckOut() {
    console.log(this.checkOutForm);
  }
}
