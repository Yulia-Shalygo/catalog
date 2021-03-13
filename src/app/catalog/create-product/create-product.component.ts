import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models.ts/products.model';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  catalogForm: FormGroup;
  product: Product = {
    name: '',
    carbs: null, 
    fats: null,
    proteins: null, 
    calories: null, 
    article: ''
  };
  
  constructor(
    private catalogService: CatalogService
  ) { }

  ngOnInit(): void {
    this.catalogForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      carbs: new FormControl(null, [Validators.required]),
      fats: new FormControl(null, [Validators.required]),
      proteins: new FormControl(null, [Validators.required]),
      calories: new FormControl(null, [Validators.required]),
      article: new FormControl(null, [Validators.required]),
    });
  }

  createProduct(): void {
    const { name, carbs, fats, proteins, calories, article } = this.catalogForm.value;

    let product: Product = {
      name, carbs, fats, proteins, calories, article
    };
    this.catalogService.createProduct(product);
    this.catalogForm.reset();
  }
}
