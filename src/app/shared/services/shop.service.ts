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
      'assets/images/defib.png',
      'this is a defib',
      700
    ),
    new ProductModel(
      'Pocket Mask',
      'i am an image',
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
    new ProductModel('Face Mask', 'i am an image', 'this is a face mask', 3),
    new ProductModel('Face Mask', 'i am an image', 'this is a face mask', 3),
  ];

  addToServiceCart(index: number) {
    this.serviceCart.push(this.shopServiceArray[index]);
    this.total += this.shopServiceArray[index].cost;
    console.log(this.total);
  }
}
