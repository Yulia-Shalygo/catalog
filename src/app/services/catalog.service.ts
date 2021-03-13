import { Injectable } from '@angular/core';
import { Product } from '../models.ts/products.model';
import firebase from 'firebase/app';
import 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor() { }

  createProduct(product: Product): any {
    return firebase.database().ref(`products/${product.name}`).set(product);
  }

  async getProducts(): Promise<Product[]> {
    const snapshot = await firebase.database().ref(`products`).once('value');
    return Object.values(snapshot.val() || {});
  }

  deleteProduct(product: Product): any {
    return firebase.database().ref(`products/${product.name}`).remove();
  }

}
