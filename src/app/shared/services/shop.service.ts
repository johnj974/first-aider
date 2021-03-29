import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  //...
  total: number = 0;
  serviceCart: ProductModel[] = [];
  shopServiceArray: ProductModel[] = [
    new ProductModel(
      'C1 Defibrillator',
      'assets/images/defibrillator.jfif',
      'this is a defib',
      700
    ),
    new ProductModel(
      'Pocket Mask',
      'assets/images/pocket-mask.jpg',
      'this is a pocket mask',
      5
    ),
    new ProductModel(
      'First Aid Kits',
      'assets/images/med-kit.jpg',
      'this is a face mask',
      3
    ),
    new ProductModel(
      'Face Mask',
      'assets/images/masks.png',
      'this is a face mask',
      3
    ),
    new ProductModel(
      'Surgical Gloves',
      'assets/images/gloves.jpg',
      'this is a face mask',
      3
    ),
    new ProductModel(
      'First Aid Signs',
      'assets/images/sign.png',
      'this is a face mask',
      3
    ),
    new ProductModel(
      'EpiPen',
      'assets/images/epi-pen.jpg',
      'this is a face mask',
      3
    ),
    new ProductModel(
      'Bandages+Slings',
      'assets/images/bandages.jpg',
      'this is a face mask',
      3
    ),
  ];

  addToServiceCart(index: number) {
    this.serviceCart.push(this.shopServiceArray[index]);
    this.total += this.shopServiceArray[index].cost;
    console.log(this.total);
  }
}
