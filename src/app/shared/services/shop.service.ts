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
      'eum voluptatum nam',
      700.0
    ),
    new ProductModel(
      'Pocket Mask',
      'assets/images/pocket-mask.jpg',
      'Lorem ipsum dolor',
      5.0
    ),
    new ProductModel(
      'First Aid Kits',
      'assets/images/med-kit.jpg',
      'numquam nobis nihil!',
      20.0
    ),
    new ProductModel(
      'Face Mask',
      'assets/images/masks.png',
      'Lorem ipsum dolor',
      5.0
    ),
    new ProductModel(
      'Surgical Gloves',
      'assets/images/gloves.jpg',
      'Lorem ipsum dolork',
      10.0
    ),
    new ProductModel(
      'First Aid Signs',
      'assets/images/sign.png',
      'numquam nobis nihil!',
      5.0
    ),
    new ProductModel(
      'EpiPen',
      'assets/images/epi-pen.jpg',
      'Lorem ipsum dolor',
      30.0
    ),
    new ProductModel(
      'Slings+Bandages',
      'assets/images/bandages.jpg',
      'eum voluptatum nam',
      10.0
    ),
  ];

  addToServiceCart(index: number) {
    this.serviceCart.push(this.shopServiceArray[index]);
    this.total += this.shopServiceArray[index].cost;
    console.log(this.total);
  }
}
