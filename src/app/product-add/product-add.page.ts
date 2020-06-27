import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {

  productName: any;
  productDescription: any;
  productImage: File;

  constructor(private router: Router, private productsService: ProductsService) { }

  ngOnInit() {
  }

  imageSelected($event) {
    this.productImage = $event.target.files[0];
  }

  addProduct() {

    console.log(this.productImage);
    const formData = new FormData();

    formData.append('productname', this.productName);
    formData.append('productdescription', this.productDescription);
    formData.append('productimage', this.productImage);

    this.productsService.createProduct(formData)
    .subscribe(response => {
      console.log(response);
    });

  }

}
