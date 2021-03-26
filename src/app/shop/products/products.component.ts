import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/shared/models/product.model';
import { ShopService } from 'src/app/shared/services/shop.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  //.
  productArray: ProductModel[] = [];
  cartArray: ProductModel[] = [];

  constructor(private shopService: ShopService, private router: Router) {}

  ngOnInit(): void {
    this.productArray = this.shopService.shopServiceArray;

    console.log(this.productArray);
  }

  onToShop() {
    this.router.navigate(['/shop']);
  }

  onAddToCart(index: number) {
    this.cartArray.push(this.productArray[index]);
    console.log(this.cartArray);
  }
}
