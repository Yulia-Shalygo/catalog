import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models.ts/products.model';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private catalogService: CatalogService
  ) { }

  ngOnInit(): void {
    this.catalogService.getProducts().then(products => this.products = products);
  }

  deleteProduct(product: Product): void {
    this.catalogService.deleteProduct(product);
  }
}
