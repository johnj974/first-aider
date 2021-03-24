import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  //...
  shopServiceArray: ProductModel[] = [
    new ProductModel(
      'C1 Defibrillator',
      'i am an image',
      'this is a defib',
      '€700'
    ),
    new ProductModel(
      'Pocket Mask',
      'i am an image',
      'this is a pocket mask',
      '€5'
    ),
    new ProductModel('Face Mask', 'i am an image', 'this is a face mask', '€3'),
  ];
}
