import { ProductsSinglePage } from './../products-single/products-single.page';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { MainConfig } from 'src/config/main';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: any;
  host: any;
  isAdmin: any;

  constructor(
    private storage: Storage,
    private productsService: ProductsService, private router: Router, private modalController: ModalController) {
    this.host = new MainConfig().getHost();
    this.storage.get('aimgapp-user-access-token')
    .then(data => {
      const userRole = JSON.parse(data)['user_role'];
      this.isAdmin = userRole == 1 ? true : false;
    });
  }

  ngOnInit() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }

  async openProduct(product) {
    console.log('Product id is: ', product.id);
    const modal = await this.modalController.create({
      component: ProductsSinglePage,
      componentProps: {
        product,
        host: this.host
      }
    });

    modal.present();
  }

  openAddProduct() {
    this.router.navigateByUrl('product-add');
  }

}
