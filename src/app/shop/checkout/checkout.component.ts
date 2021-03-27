import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  orderPlaced: boolean = false;

  constructor(private shopService: ShopService) {}

  orderTotal = this.shopService.total;

  ngOnInit(): void {
    this.checkoutCart = this.shopService.serviceCart;
    console.log(this.checkoutCart);

    this.checkOutForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, Validators.required),
      addressOne: new FormControl(null, Validators.required),
      addressTwo: new FormControl(null, Validators.required),
      areaCode: new FormControl(null),
    });
  }

  onCheckOut() {
    console.log(this.checkOutForm);
    this.orderPlaced = true;
  }
}
