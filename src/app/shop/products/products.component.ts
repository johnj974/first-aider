import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private shopService: ShopService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.shopService.serviceCart = [];
    this.productArray = this.shopService.shopServiceArray;
  }

  onAddToCart(index: number) {
    this.cartArray.push(this.productArray[index]);
    this.shopService.addToServiceCart(index);
    console.log(this.cartArray);
  }

  onCheckOut() {
    this.router.navigate(['checkout'], { relativeTo: this.route });
  }
}
